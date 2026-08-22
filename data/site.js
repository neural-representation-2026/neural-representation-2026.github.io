(function () {
  "use strict";

  const config = window.COURSE_CONFIG;
  const course = window.COURSE_DATA;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeUrl(value) {
    const url = String(value ?? "").trim();
    return /^https:\/\//.test(url) ? url : "#";
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function setupCourseShell() {
    setText("[data-course-code]", config.courseCode);
    setText("[data-course-title]", config.courseTitle);
    setText("[data-course-term]", config.term);
    setText("[data-course-type]", config.courseType);
    setText("[data-research-cutoff]", config.researchCutoff);
    setText("[data-status-refresh]", config.statusRefresh);
    setText("[data-meeting-format]", config.meeting.format);
    setText("[data-meeting-days]", config.meeting.days);
    setText("[data-meeting-time]", config.meeting.time);
    setText("[data-meeting-location]", config.meeting.location);

    document.querySelectorAll("[data-instructor]").forEach((element) => {
      element.innerHTML = `<a href="${safeUrl(config.instructor.url)}" target="_blank" rel="noreferrer">${escapeHtml(config.instructor.name)}</a>`;
    });
    document.querySelectorAll("[data-tas]").forEach((element) => {
      element.innerHTML = config.tas.map((ta) => {
        const name = escapeHtml(ta.name);
        return ta.url ? `<a href="${safeUrl(ta.url)}" target="_blank" rel="noreferrer">${name}</a>` : name;
      }).join(", ");
    });

    document.querySelectorAll("[data-config-link]").forEach((element) => {
      const key = element.getAttribute("data-config-link");
      const url = config.links[key];
      if (url) {
        element.href = url;
      } else {
        element.classList.add("is-unconfigured");
        element.setAttribute("aria-disabled", "true");
        element.addEventListener("click", (event) => event.preventDefault());
      }
    });

    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.getAttribute("data-nav") === page) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function statCard(value, label, note) {
    return `<article class="stat-card"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span><small>${escapeHtml(note)}</small></article>`;
  }

  function setupHome() {
    const target = document.querySelector("[data-course-stats]");
    if (!target || !course) return;
    const stats = course.stats;
    target.innerHTML = [
      statCard(stats.slots, "reading slots", "14 weeks × 3 choices"),
      statCard(stats.bundles, "paper bundles", "one full-read lead"),
      statCard(stats.contains2025or2026, "current slots", "contain 2025/26 work"),
      statCard(stats.robotics, "robotics slots", "mapping → manipulation"),
    ].join("");

    const preview = document.querySelector("[data-week-preview]");
    if (!preview) return;
    const selectedWeeks = [3, 5, 10, 12, 13, 14];
    preview.innerHTML = selectedWeeks.map((week) => {
      const slots = course.slots.filter((slot) => slot.week === week);
      return `<a class="week-preview" href="topics.html#week-${week}">
        <span>Week ${week}</span>
        <strong>${escapeHtml(slots[0]?.topic || "")}</strong>
        <small>${slots.filter((slot) => slot.papers.length > 1).length} bundle · ${slots.filter((slot) => slot.era !== "Classic-centered").length}/3 current</small>
      </a>`;
    }).join("");
  }

  function slotClass(slot) {
    if (slot.era === "Frontier (2026)") return "frontier";
    if (slot.track === "Robotics") return "robotics";
    if (slot.track === "GS-centered") return "gs";
    if (slot.era === "Classic-centered") return "classic";
    if (slot.track === "Embodied") return "embodied";
    return "core";
  }

  function paperMarkup(paper) {
    return `<li class="paper-row">
      <span class="paper-role ${paper.role.toLowerCase()}">${escapeHtml(paper.role)}</span>
      <div>
        <a href="${safeUrl(paper.url)}" target="_blank" rel="noreferrer">${escapeHtml(paper.title)}</a>
        <small>${escapeHtml(paper.venue)}</small>
      </div>
    </li>`;
  }

  function slotMarkup(slot) {
    const isBundle = slot.papers.length > 1;
    return `<details class="slot-card ${slotClass(slot)}" data-slot-card>
      <summary>
        <div class="slot-number">${escapeHtml(slot.slotId)}</div>
        <div class="slot-title">
          <span>${escapeHtml(slot.focus)}</span>
          <strong>${escapeHtml(slot.papers[0].title)}</strong>
        </div>
        <div class="slot-labels">
          <span class="badge">${escapeHtml(slot.track)}</span>
          <span class="badge subtle">${escapeHtml(isBundle ? slot.format : "Single")}</span>
        </div>
      </summary>
      <div class="slot-details">
        <div>
          <p class="eyebrow">Reading unit</p>
          <ul class="paper-list">${slot.papers.map(paperMarkup).join("")}</ul>
        </div>
        <aside>
          <p class="eyebrow">Discussion hook</p>
          <p>${escapeHtml(slot.discussionHook)}</p>
          <p class="load"><strong>Load:</strong> ${escapeHtml(slot.readingLoad)}</p>
          <p class="era">${escapeHtml(slot.era)}</p>
        </aside>
      </div>
    </details>`;
  }

  function setupTopics() {
    const schedule = document.querySelector("[data-schedule]");
    if (!schedule || !course) return;
    const search = document.querySelector("[data-slot-search]");
    const filterButtons = Array.from(document.querySelectorAll("[data-track-filter]"));
    const resultCount = document.querySelector("[data-slot-count]");
    let activeFilter = "All";

    function matchesFilter(slot) {
      if (activeFilter === "All") return true;
      if (activeFilter === "Frontier") return slot.era === "Frontier (2026)";
      return slot.track === activeFilter;
    }

    function render() {
      const query = String(search?.value || "").trim().toLowerCase();
      const visible = course.slots.filter((slot) => {
        const haystack = [slot.slotId, slot.topic, slot.focus, slot.format, slot.era, slot.track, slot.discussionHook, ...slot.papers.map((paper) => `${paper.title} ${paper.venue}`)].join(" ").toLowerCase();
        return matchesFilter(slot) && (!query || haystack.includes(query));
      });
      const weeks = Array.from(new Set(visible.map((slot) => slot.week)));
      schedule.innerHTML = weeks.map((week) => {
        const slots = visible.filter((slot) => slot.week === week);
        const topic = slots[0]?.topic || "";
        return `<section class="week-block" id="week-${week}">
          <header><span>Week ${week}</span><h2>${escapeHtml(topic)}</h2><small>${slots.length} reading slot${slots.length === 1 ? "" : "s"}</small></header>
          <div class="week-slots">${slots.map(slotMarkup).join("")}</div>
        </section>`;
      }).join("") || `<div class="empty-state"><strong>No matching slots.</strong><span>Try a broader search or choose “All.”</span></div>`;
      if (resultCount) resultCount.textContent = `${visible.length} of ${course.slots.length} slots`;
    }

    filterButtons.forEach((button) => button.addEventListener("click", () => {
      activeFilter = button.getAttribute("data-track-filter") || "All";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    }));
    search?.addEventListener("input", render);
    document.querySelector("[data-expand-all]")?.addEventListener("click", () => document.querySelectorAll("[data-slot-card]").forEach((item) => { item.open = true; }));
    document.querySelector("[data-collapse-all]")?.addEventListener("click", () => document.querySelectorAll("[data-slot-card]").forEach((item) => { item.open = false; }));
    render();
  }

  function poolTrack(paper) {
    const tags = paper.tags.join(" ").toLowerCase();
    if (tags.includes("robotics") || tags.includes("embodied")) return "Robotics / embodied";
    if (tags.includes("gs") || tags.includes("splat")) return "Gaussian splatting";
    if (tags.includes("4d") || tags.includes("world model")) return "4D / world models";
    return "Core 3DV";
  }

  function setupBackups() {
    const table = document.querySelector("[data-paper-pool]");
    if (!table || !window.PAPER_POOL) return;
    const search = document.querySelector("[data-pool-search]");
    const placement = document.querySelector("[data-placement-filter]");
    const track = document.querySelector("[data-pool-track-filter]");
    const count = document.querySelector("[data-pool-count]");

    const placementGroups = ["All", "Main slot anchor", "Bundle companion / backup", "Unused backup", "Frontier Watch"];
    placement.innerHTML = placementGroups.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
    const tracks = ["All", ...Array.from(new Set(window.PAPER_POOL.map(poolTrack))).sort()];
    track.innerHTML = tracks.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");

    function placementGroup(value) {
      if (value === "Main slot anchor" || value === "Bundle companion / backup" || value === "Frontier Watch") return value;
      if (String(value).startsWith("Frontier")) return "Frontier Watch";
      return "Unused backup";
    }

    function render() {
      const query = String(search.value || "").trim().toLowerCase();
      const visible = window.PAPER_POOL.filter((paper) => {
        const text = [paper.title, paper.topic, paper.venue, paper.review, paper.signal, paper.contribution, paper.teachingHook, paper.tags.join(" ")].join(" ").toLowerCase();
        return (!query || text.includes(query))
          && (placement.value === "All" || placementGroup(paper.placement) === placement.value)
          && (track.value === "All" || poolTrack(paper) === track.value);
      });
      table.innerHTML = visible.map((paper) => `<tr>
        <td><a href="${safeUrl(paper.url)}" target="_blank" rel="noreferrer">${escapeHtml(paper.title)}</a><small>${escapeHtml(paper.topic)}</small></td>
        <td><span class="pool-track">${escapeHtml(poolTrack(paper))}</span></td>
        <td>${escapeHtml(paper.venue)}<small>${escapeHtml(paper.review)}</small></td>
        <td><span class="placement ${placementGroup(paper.placement).toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}">${escapeHtml(placementGroup(paper.placement))}</span></td>
        <td>${escapeHtml(paper.teachingHook)}</td>
      </tr>`).join("") || `<tr><td colspan="5"><div class="empty-state"><strong>No matching papers.</strong><span>Reset the filters and try again.</span></div></td></tr>`;
      count.textContent = `${visible.length} of ${window.PAPER_POOL.length} papers`;
    }

    [search, placement, track].forEach((control) => control.addEventListener(control === search ? "input" : "change", render));
    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupCourseShell();
    setupHome();
    setupTopics();
    setupBackups();
  });
})();
