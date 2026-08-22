window.PAPER_POOL = [
  {
    "topic": "Neural Field Foundations",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV"
    ],
    "title": "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis",
    "venue": "ECCV 2020",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "A coordinate MLP plus differentiable volume rendering represents a scene as a continuous radiance field.",
    "teachingHook": "Which parts of the NeRF recipe are representation choices, and which are optimization or rendering choices?",
    "rationale": "Foundation for nearly every later neural-scene paper",
    "url": "https://www.matthewtancik.com/nerf",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Neural Field Foundations",
    "tier": "Companion",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Systems"
    ],
    "title": "Instant Neural Graphics Primitives with a Multiresolution Hash Encoding",
    "venue": "ACM TOG / SIGGRAPH 2022",
    "review": "Peer-reviewed",
    "signal": "Seminal systems paper",
    "contribution": "A multiresolution hash encoding shifts the bottleneck from a large MLP to a compact, hardware-friendly representation.",
    "teachingHook": "Why can encoding and memory access matter more than network depth?",
    "rationale": "Compare continuous-field capacity and systems co-design with NeRF",
    "url": "https://nvlabs.github.io/instant-ngp/",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Neural Field Foundations",
    "tier": "Companion",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Explicit representation"
    ],
    "title": "Plenoxels: Radiance Fields without Neural Networks",
    "venue": "CVPR 2022 Oral",
    "review": "Peer-reviewed",
    "signal": "Oral",
    "contribution": "A sparse voxel grid with spherical harmonics matches NeRF-style rendering without an MLP.",
    "teachingHook": "Does a radiance field need to be neural, or is the key ingredient differentiable rendering?",
    "rationale": "Explicit counterpoint to NeRF and Instant-NGP",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Fridovich-Keil_Plenoxels_Radiance_Fields_Without_Neural_Networks_CVPR_2022_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Implicit Geometry & Surfaces",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Geometry"
    ],
    "title": "DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation",
    "venue": "CVPR 2019",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "An auto-decoder learns a continuous signed-distance function and a latent space of shapes.",
    "teachingHook": "What do continuous level sets buy for interpolation, completion, topology, and meshing?",
    "rationale": "Shape-field foundation for neural surface work",
    "url": "https://openaccess.thecvf.com/content_CVPR_2019/html/Park_DeepSDF_Learning_Continuous_Signed_Distance_Functions_for_Shape_Representation_CVPR_2019_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Implicit Geometry & Surfaces",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Geometry"
    ],
    "title": "NeuS: Learning Neural Implicit Surfaces by Volume Rendering for Multi-view Reconstruction",
    "venue": "NeurIPS 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "NeuS connects an SDF zero level set to volume rendering and analyzes geometric bias in density-style reconstruction.",
    "teachingHook": "How should an SDF induce opacity so rendering supervision recovers an accurate surface?",
    "rationale": "Bridge from implicit shape fields to multi-view reconstruction",
    "url": "https://lingjie0206.github.io/papers/NeuS/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Implicit Geometry & Surfaces",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Geometry",
      "Mesh"
    ],
    "title": "ExMesh: EXplicit Mesh Reconstruction with Topology Adaptation",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Differentiable vertex optimization alternates with discrete split/merge operations and online UV maintenance.",
    "teachingHook": "When must continuous optimization give way to discrete topology edits?",
    "rationale": "Modern explicit-geometry contrast to neural implicit surfaces",
    "url": "https://fan-treasure.github.io/ExMesh_page.github.io/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Generalizable Neural Rendering",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Generalizable NVS"
    ],
    "title": "pixelNeRF: Neural Radiance Fields from One or Few Images",
    "venue": "CVPR 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Image-conditioned local features turn NeRF from per-scene optimization into cross-scene inference.",
    "teachingHook": "What is gained and lost when a scene representation is amortized across a dataset?",
    "rationale": "Historical anchor for feed-forward neural rendering",
    "url": "https://alexyu.net/pixelnerf/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Generalizable Neural Rendering",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Generalizable NVS"
    ],
    "title": "LVSM: A Large View Synthesis Model with Minimal 3D Inductive Bias",
    "venue": "ICLR 2025 Oral",
    "review": "Peer-reviewed",
    "signal": "Oral",
    "contribution": "A transformer maps source-view tokens to target-view tokens with minimal hard-coded 3D structure.",
    "teachingHook": "How much explicit 3D inductive bias is still necessary at scale?",
    "rationale": "Modern large-model successor to pixelNeRF",
    "url": "https://haian-jin.github.io/projects/LVSM/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Generalizable Neural Rendering",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Rendering"
    ],
    "title": "RenderFormer: Transformer-based Neural Rendering of Triangle Meshes with Global Illumination",
    "venue": "ACM TOG / SIGGRAPH 2025",
    "review": "Peer-reviewed",
    "signal": "Journal track",
    "contribution": "Triangle tokens and transformer attention learn image formation with global light transport.",
    "teachingHook": "Can a learned renderer internalize visibility and multi-bounce illumination without a hand-written integrator?",
    "rationale": "Contrasts scene representation with learned image formation",
    "url": "https://microsoft.github.io/renderformer/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Visual geometry"
    ],
    "title": "DUSt3R: Geometric 3D Vision Made Easy",
    "venue": "CVPR 2024",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Pairwise pointmap regression unifies matching, depth, pose, and reconstruction without a calibration-first pipeline.",
    "teachingHook": "What changes when 3D is predicted directly rather than recovered by a sequence of geometric modules?",
    "rationale": "Foundation for VGGT and universal feed-forward reconstruction",
    "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_DUSt3R_Geometric_3D_Vision_Made_Easy_CVPR_2024_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Visual geometry"
    ],
    "title": "VGGT: Visual Geometry Grounded Transformer",
    "venue": "CVPR 2025 Best Paper",
    "review": "Peer-reviewed",
    "signal": "Best Paper",
    "contribution": "A single transformer predicts cameras, depth, point maps, and tracks from one or many images.",
    "teachingHook": "Is a generalist geometry model replacing a pipeline, or simply learning its priors and failure modes?",
    "rationale": "Scales the DUSt3R pointmap paradigm",
    "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Wang_VGGT_Visual_Geometry_Grounded_Transformer_CVPR_2025_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Visual geometry"
    ],
    "title": "MapAnything: Universal Feed-Forward Metric 3D Reconstruction",
    "venue": "3DV 2026",
    "review": "Peer-reviewed",
    "signal": "Accepted",
    "contribution": "One conditional model accepts images plus optional cameras, depth, or partial geometry and solves many metric reconstruction tasks.",
    "teachingHook": "When can a universal conditional model replace specialist SfM, MVS, and depth systems?",
    "rationale": "2026 metric and multimodal successor to VGGT",
    "url": "https://openreview.net/forum?id=tcmc0jpDgU",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Neural SLAM & Robot Mapping",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "SLAM",
      "Mapping"
    ],
    "title": "iMAP: Implicit Mapping and Positioning in Real-Time",
    "venue": "ICCV 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal neural SLAM",
    "contribution": "One online MLP acts as dense map, renderer, and tracking objective in RGB-D SLAM.",
    "teachingHook": "Can one continuously optimized function be both a faithful map and a stable localization objective?",
    "rationale": "Neural-field starting point for robot mapping",
    "url": "https://openaccess.thecvf.com/content/ICCV2021/html/Sucar_iMAP_Implicit_Mapping_and_Positioning_in_Real-Time_ICCV_2021_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Neural SLAM & Robot Mapping",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "SLAM",
      "Mapping"
    ],
    "title": "NICE-SLAM: Neural Implicit Scalable Encoding for SLAM",
    "venue": "CVPR 2022",
    "review": "Peer-reviewed",
    "signal": "Seminal neural SLAM",
    "contribution": "Hierarchical local grids and decoupled geometry/detail address iMAP's over-smoothing and scalability limits.",
    "teachingHook": "How should locality and hierarchy change tracking, mapping, and catastrophic forgetting?",
    "rationale": "Direct systems-and-representation answer to iMAP",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Zhu_NICE-SLAM_Neural_Implicit_Scalable_Encoding_for_SLAM_CVPR_2022_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Neural SLAM & Robot Mapping",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "SLAM",
      "Visual geometry"
    ],
    "title": "MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors",
    "venue": "CVPR 2025",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A feed-forward 3D prior is integrated with real-time dense tracking, mapping, and loop closure.",
    "teachingHook": "Where should a pretrained geometry prior enter a SLAM system, and which consistency problems remain classical?",
    "rationale": "Modern learned-prior successor to neural-field SLAM",
    "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Murai_MASt3R-SLAM_Real-Time_Dense_SLAM_with_3D_Reconstruction_Priors_CVPR_2025_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Gaussian Splatting — One Focused Week",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "GS-centered"
    ],
    "title": "3D Gaussian Splatting for Real-Time Radiance Field Rendering",
    "venue": "ACM TOG / SIGGRAPH 2023",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Optimizable anisotropic Gaussians plus differentiable splatting deliver real-time high-quality novel-view rendering.",
    "teachingHook": "Which representation and rasterization choices explain the speed-quality jump over ray-marched fields?",
    "rationale": "The single historical GS anchor",
    "url": "https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Gaussian Splatting — One Focused Week",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "GS-centered"
    ],
    "title": "AAA-Gaussians: Anti-Aliased and Artifact-Free 3D Gaussian Rendering",
    "venue": "ICCV 2025 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "Full 3D Gaussian evaluation, adaptive anti-aliasing, robust bounds, and 3D culling reduce aliasing and pop-in.",
    "teachingHook": "Which approximations in projection, sampling, and culling create the characteristic GS artifacts?",
    "rationale": "Principled rasterization correction to original 3DGS",
    "url": "https://derthomy.github.io/AAA-Gaussians/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Gaussian Splatting — One Focused Week",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "GS-centered"
    ],
    "title": "Gaussian Point Splatting",
    "venue": "ACM TOG / SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Journal track",
    "contribution": "Pixel-sized opaque points are stochastically sampled from Gaussians, eliminating sorting and tile binning.",
    "teachingHook": "How do bias, variance, noise, and GPU load balance change under Monte Carlo splatting?",
    "rationale": "A representation-and-rendering contrast, not another incremental optimizer",
    "url": "https://jorisar.nl/gaussian_point_splatting/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Inverse Rendering & Relighting",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Inverse rendering"
    ],
    "title": "NeRFactor: Neural Factorization of Shape and Reflectance Under an Unknown Illumination",
    "venue": "ACM TOG / SIGGRAPH Asia 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Normals, visibility, albedo, BRDF, and environment lighting are factorized into neural fields.",
    "teachingHook": "Which decompositions are identifiable from images, and which are imposed by priors?",
    "rationale": "Historical anchor for editable neural scenes",
    "url": "https://xiuming.info/projects/nerfactor/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Inverse Rendering & Relighting",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Inverse rendering",
      "Light transport"
    ],
    "title": "Neural Inverse Rendering from Propagating Light",
    "venue": "CVPR 2025 Best Student Paper",
    "review": "Peer-reviewed",
    "signal": "Best Student Paper",
    "contribution": "A neural representation follows light propagation to recover shape and appearance under global illumination.",
    "teachingHook": "How does modeling indirect transport change ambiguity, supervision, and evaluation?",
    "rationale": "Global-illumination successor to factorized inverse rendering",
    "url": "https://anaghmalik.com/InvProp/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Inverse Rendering & Relighting",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Inverse rendering"
    ],
    "title": "MVInverse: Feed-forward Multiview Inverse Rendering in Seconds",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A feed-forward multiview model rapidly predicts editable geometry, material, and lighting factors.",
    "teachingHook": "What is lost when inverse rendering is amortized instead of optimized per scene?",
    "rationale": "Feed-forward contrast to NeRFactor and propagated-light optimization",
    "url": "https://maddog241.github.io/mvinverse-page/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D Generation & Representation Design",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Generation"
    ],
    "title": "DreamFusion: Text-to-3D using 2D Diffusion",
    "venue": "ICLR 2023",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Score distillation uses a frozen 2D diffusion prior to optimize a 3D representation from text.",
    "teachingHook": "Why did SDS work at all, and why do Janus, over-saturation, and geometry failures occur?",
    "rationale": "Historical anchor for text-to-3D",
    "url": "https://openreview.net/forum?id=FjNys5c7VyY",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "3D Generation & Representation Design",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Generation"
    ],
    "title": "LRM: Large Reconstruction Model for Single Image to 3D",
    "venue": "ICLR 2024",
    "review": "Peer-reviewed",
    "signal": "Seminal large reconstruction model",
    "contribution": "A large transformer amortizes single-image-to-3D reconstruction across a large training corpus.",
    "teachingHook": "What changed when test-time optimization became one feed-forward pass?",
    "rationale": "Bridge from SDS to scalable 3D-native models",
    "url": "https://openreview.net/forum?id=sllU8vvsFF",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "3D Generation & Representation Design",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "Generation",
      "Structured latent"
    ],
    "title": "Native and Compact Structured Latents for 3D Generation",
    "venue": "CVPR 2026 Best Student Paper",
    "review": "Peer-reviewed",
    "signal": "Best Student Paper",
    "contribution": "O-Voxel compactly represents arbitrary topology, geometry, texture, and PBR attributes for TRELLIS.2.",
    "teachingHook": "How does the latent representation constrain topology coverage, compression, controllability, and scale?",
    "rationale": "Native structured-3D successor to DreamFusion and LRM",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Xiang_Native_and_Compact_Structured_Latents_for_3D_Generation_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Dynamic & 4D Representations",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "4D"
    ],
    "title": "HyperNeRF: A Higher-Dimensional Representation for Topologically Varying Neural Radiance Fields",
    "venue": "ACM TOG / SIGGRAPH Asia 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "A higher-dimensional embedding represents topology change beyond a single canonical deformation field.",
    "teachingHook": "When does a representation fail because the canonical-space assumption is topologically impossible?",
    "rationale": "Classic continuous-field anchor for 4D scenes",
    "url": "https://hypernerf.github.io/",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Dynamic & 4D Representations",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "4D"
    ],
    "title": "Efficiently Reconstructing Dynamic Scenes One D4RT at a Time",
    "venue": "CVPR 2026 Best Paper",
    "review": "Peer-reviewed",
    "signal": "Best Paper",
    "contribution": "D4RT uses a unified transformer-based 4D representation for efficient dynamic-scene reconstruction.",
    "teachingHook": "What state should a general 4D model predict to balance geometry, motion, identity, and efficiency?",
    "rationale": "Award-winning feed-forward successor to dynamic neural fields",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Efficiently_Reconstructing_Dynamic_Scenes_One_D4RT_at_a_Time_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Dynamic & 4D Representations",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV",
      "4D",
      "Point maps"
    ],
    "title": "V-DPM: 4D Video Reconstruction with Dynamic Point Maps",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Dynamic point maps extend static visual-geometry models to video geometry and 3D point motion.",
    "teachingHook": "How do point maps compare with continuous deformation and scene-flow fields as a 4D state?",
    "rationale": "Representation contrast to HyperNeRF and D4RT",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Sucar_V-DPM_4D_Video_Reconstruction_with_Dynamic_Point_Maps_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Open-Vocabulary 3D Maps for Embodied Agents",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Semantic mapping"
    ],
    "title": "ConceptFusion: Open-set Multimodal 3D Mapping",
    "venue": "RSS 2023",
    "review": "Peer-reviewed",
    "signal": "Seminal open-vocabulary map",
    "contribution": "Foundation-model features are fused into a persistent 3D map queryable by text, images, audio, and clicks.",
    "teachingHook": "What semantic information survives 2D-to-3D fusion, and at what spatial granularity?",
    "rationale": "Dense multimodal map anchor for embodied perception",
    "url": "https://www.roboticsproceedings.org/rss19/p066.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Open-Vocabulary 3D Maps for Embodied Agents",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Scene graph",
      "Navigation"
    ],
    "title": "Hierarchical Open-Vocabulary 3D Scene Graphs for Language-Grounded Robot Navigation",
    "venue": "RSS 2024",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "HOV-SG compresses dense open-vocabulary maps into floor-room-object hierarchies for long-horizon navigation.",
    "teachingHook": "When is a hierarchical graph more actionable than a dense metric-semantic field?",
    "rationale": "Structure-and-navigation contrast to ConceptFusion",
    "url": "https://www.roboticsproceedings.org/rss20/p077.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Open-Vocabulary 3D Maps for Embodied Agents",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Spatial reasoning"
    ],
    "title": "RoboSpatial: Teaching Spatial Understanding to 2D and 3D Vision-Language Models for Robotics",
    "venue": "CVPR 2025",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A robotics-centered dataset teaches 2D and 3D models spatial relations in scans and egocentric views.",
    "teachingHook": "Should a robot reason over language-aligned pixels, point clouds, or a persistent map?",
    "rationale": "Reasoning-focused update to semantic mapping",
    "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Song_RoboSpatial_Teaching_Spatial_Understanding_to_2D_and_3D_Vision-Language_Models_CVPR_2025_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Active Reconstruction & Next-Best View",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Active perception"
    ],
    "title": "ActiveNeRF: Learning Where to See with Uncertainty Estimation",
    "venue": "ECCV 2022",
    "review": "Peer-reviewed",
    "signal": "Seminal active neural field",
    "contribution": "A NeRF uncertainty model chooses views that reduce reconstruction uncertainty.",
    "teachingHook": "Does predictive uncertainty actually correspond to information gain for the downstream 3D task?",
    "rationale": "Historical active-view anchor",
    "url": "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136930225.pdf",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Active Reconstruction & Next-Best View",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Active perception",
      "Reconstruction"
    ],
    "title": "GenNBV: Generalizable Next-Best-View Policy for Active 3D Reconstruction",
    "venue": "CVPR 2024",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A learned policy maps a partial 3D state to the next camera view across object categories.",
    "teachingHook": "What partial-scene state best represents coverage, uncertainty, and generalization?",
    "rationale": "Generalizable policy contrast to per-scene ActiveNeRF",
    "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Chen_GenNBV_Generalizable_Next-Best-View_Policy_for_Active_3D_Reconstruction_CVPR_2024_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Active Reconstruction & Next-Best View",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Active perception",
      "VLM"
    ],
    "title": "AREA3D: Active Reconstruction Agent with Unified Feed-Forward 3D Perception and Vision-Language Guidance",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A fused uncertainty field combines feed-forward geometry with high-level VLM guidance for active reconstruction.",
    "teachingHook": "Do semantic cues improve exploration beyond geometric coverage, and how should the benefit be measured?",
    "rationale": "Modern modular successor to GenNBV",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Xu_AREA3D_Active_Reconstruction_Agent_with_Unified_Feed-Forward_3D_Perception_and_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D Feature Fields for Manipulation",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Feature field"
    ],
    "title": "Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation",
    "venue": "CoRL 2023",
    "review": "Peer-reviewed",
    "signal": "F3RM",
    "contribution": "2D foundation-model semantics are distilled into geometrically precise 3D feature fields for grasping and placing.",
    "teachingHook": "What information survives feature distillation, and how does field geometry affect few-shot generalization?",
    "rationale": "Semantic-field anchor for manipulation",
    "url": "https://proceedings.mlr.press/v229/shen23a.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "3D Feature Fields for Manipulation",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Feature field"
    ],
    "title": "Act3D: 3D Feature Field Transformers for Multi-Task Robotic Manipulation",
    "venue": "CoRL 2023",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Coarse-to-fine sampling and relative-position attention query 3D feature fields without dense high-resolution voxels.",
    "teachingHook": "How should a policy allocate computation across continuous 3D space?",
    "rationale": "Adaptive computation contrast to distilled static feature fields",
    "url": "https://proceedings.mlr.press/v229/gervet23a.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D Feature Fields for Manipulation",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Manipulation",
      "GS-adjacent"
    ],
    "title": "GeoPredict: Leveraging Predictive Kinematics and 3D Gaussian Geometry for Precise VLA Manipulation",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "Future robot kinematics and 3D workspace geometry supervise a lightweight VLA policy, even when geometry decoding is removed at test time.",
    "teachingHook": "When does explicit predictive 3D supervision help a policy beyond visual pretraining?",
    "rationale": "A robotics use case; conservatively counted as GS-adjacent",
    "url": "https://arxiv.org/abs/2512.16811",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "3D VLA & Geometric World Models",
    "tier": "Core",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "World model",
      "VLA"
    ],
    "title": "3D-VLA: A 3D Vision-Language-Action Generative World Model",
    "venue": "ICML 2024",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A 3D-language model generates goal images and point clouds and connects imagined 3D goals to action planning.",
    "teachingHook": "What makes a generated 3D state useful for acting rather than merely visually plausible?",
    "rationale": "Early anchor for imagine-in-3D-then-act",
    "url": "https://proceedings.mlr.press/v235/zhen24a.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "3D VLA & Geometric World Models",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "World model",
      "Frontier"
    ],
    "title": "PointWorld: Scaling 3D World Models for In-The-Wild Robotic Manipulation",
    "venue": "arXiv 2026; ICLR main submission withdrawn",
    "review": "Unreviewed / workshop version",
    "signal": "Frontier",
    "contribution": "3D point flow unifies action and scene evolution for cross-embodiment pretraining and model-predictive control.",
    "teachingHook": "What evidence is needed before a large frontier world model should displace accepted anchors?",
    "rationale": "Freshest representation-centric robotics preprint; reviewer-style assignment",
    "url": "https://arxiv.org/abs/2601.03782",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D VLA & Geometric World Models",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "World model",
      "Physics"
    ],
    "title": "PhysMani: Physics-principled 3D World Model for Dynamic Object Manipulation",
    "venue": "ECCV 2026",
    "review": "Peer-reviewed",
    "signal": "Accepted",
    "contribution": "A divergence-free 3D velocity field predicts future scene state and connects explicitly to action learning.",
    "teachingHook": "Physical inductive bias versus large-scale world-model pretraining: which generalizes better and why?",
    "rationale": "Accepted physics-grounded contrast to PointWorld",
    "url": "https://arxiv.org/abs/2607.01938",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Simulation-Ready Assets & Physical Worlds",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Embodied",
      "Articulation",
      "Simulation"
    ],
    "title": "SPARK: Sim-ready Part-level Articulated Reconstruction with VLM Knowledge",
    "venue": "CVPR 2026 Oral",
    "review": "Peer-reviewed",
    "signal": "Oral",
    "contribution": "VLM part semantics, diffusion geometry, and differentiable kinematics reconstruct a URDF-ready articulated object from one image.",
    "teachingHook": "What output contract makes a reconstructed asset genuinely usable in a simulator?",
    "rationale": "Simulation-ready articulated-asset anchor",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/He_SPARK_Sim-ready_Part-level_Articulated_Reconstruction_with_VLM_Knowledge_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Simulation-Ready Assets & Physical Worlds",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Embodied",
      "Physical assets",
      "Simulation"
    ],
    "title": "PhysX-Anything: Simulation-Ready Physical 3D Assets from Single Image",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "One image yields explicit geometry, articulation, scale, and physical attributes validated with contact-rich policies.",
    "teachingHook": "How should geometry, mass, friction, joints, and scale be evaluated jointly?",
    "rationale": "Broad physical-asset contrast to SPARK",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Cao_PhysX-Anything_Simulation-Ready_Physical_3D_Assets_from_Single_Image_CVPR_2026_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Simulation-Ready Assets & Physical Worlds",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Embodied",
      "Physics",
      "Simulation"
    ],
    "title": "Perceptual 3D Simulation With Physical World Modeling",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "P3Sim learns perceptually grounded 3D simulation and physical world modeling from visual evidence.",
    "teachingHook": "How should a learned simulator be judged beyond video quality: state accuracy, interventions, or control utility?",
    "rationale": "Scene-level simulation complement to asset reconstruction",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Lee_Perceptual_3D_Simulation_With_Physical_World_Modeling_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Radiance Fields",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Mip-NeRF 360: Unbounded Anti-Aliased Neural Radiance Fields",
    "venue": "CVPR 2022",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Anti-aliasing, unbounded-scene contraction, and distortion regularization form a rigorous real-scene NeRF baseline.",
    "teachingHook": "Sampling and loss design remain useful even after representations change.",
    "rationale": "Background for unbounded scene rendering",
    "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Barron_Mip-NeRF_360_Unbounded_Anti-Aliased_Neural_Radiance_Fields_CVPR_2022_paper.html",
    "placement": "Backup — classic"
  },
  {
    "topic": "Neural Surfaces",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Geometry"
    ],
    "title": "Multiview Neural Surface Reconstruction by Disentangling Geometry and Appearance",
    "venue": "NeurIPS 2020",
    "review": "Peer-reviewed",
    "signal": "IDR",
    "contribution": "Differentiable surface rendering jointly optimizes implicit geometry, appearance, and cameras.",
    "teachingHook": "Contrast surface rendering with volume-rendered SDFs.",
    "rationale": "Companion to NeuS",
    "url": "https://proceedings.neurips.cc/paper/2020/hash/1a77befc3b608d6ed363567685f70e1e-Abstract.html",
    "placement": "Backup — classic"
  },
  {
    "topic": "Neural Surfaces",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Geometry"
    ],
    "title": "Volume Rendering of Neural Implicit Surfaces",
    "venue": "NeurIPS 2021",
    "review": "Peer-reviewed",
    "signal": "VolSDF",
    "contribution": "An SDF induces density with an opacity-approximation error bound.",
    "teachingHook": "NeuS and VolSDF are two principled answers to the same rendering problem.",
    "rationale": "Companion to NeuS",
    "url": "https://proceedings.neurips.cc/paper/2021/hash/25e2a30f44898b9f3e978b1786dcd85c-Abstract.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Dynamic & 4D",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "4D"
    ],
    "title": "Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes",
    "venue": "CVPR 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Appearance, geometry, and 3D scene flow are learned jointly from monocular video.",
    "teachingHook": "Compare continuous scene flow with dynamic point maps.",
    "rationale": "Companion to V-DPM",
    "url": "https://www.cs.cornell.edu/~zl548/NSFF/",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Inverse Rendering",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Appearance"
    ],
    "title": "Ref-NeRF: Structured View-Dependent Appearance for Neural Radiance Fields",
    "venue": "CVPR 2022 Oral",
    "review": "Peer-reviewed",
    "signal": "Best Student Paper Honorable Mention",
    "contribution": "Reflection-direction parameterization and integrated directional encoding structure view-dependent appearance.",
    "teachingHook": "Contrast structured radiance with explicit material and illumination factorization.",
    "rationale": "Companion to NeRFactor",
    "url": "https://dorverbin.github.io/refnerf/",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "3D Generation",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Core 3DV",
      "Generation"
    ],
    "title": "GET3D: A Generative Model of High Quality 3D Textured Shapes Learned from Images",
    "venue": "NeurIPS 2022",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "A generative model outputs textured meshes using differentiable surface extraction and 2D adversarial supervision.",
    "teachingHook": "Explicit mesh generation versus native structured diffusion.",
    "rationale": "Companion to TRELLIS.2",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2022/hash/cebbd24f1e50bcb63d015611fe0fe767-Abstract-Conference.html",
    "placement": "Backup — classic"
  },
  {
    "topic": "Actionable Robot Maps",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Scene graph"
    ],
    "title": "3D Dynamic Scene Graphs: Actionable Spatial Perception with Places, Objects, and Humans",
    "venue": "RSS 2020",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "A hierarchical map organizes metric geometry, objects, places, rooms, agents, and relations.",
    "teachingHook": "A reconstruction is not yet an actionable world model.",
    "rationale": "Background for HOV-SG and SayPlan",
    "url": "https://www.roboticsproceedings.org/rss16/p079.html",
    "placement": "Backup — robotics"
  },
  {
    "topic": "Dynamic Robot Maps",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "SLAM",
      "Dynamics"
    ],
    "title": "Khronos: A Unified Approach for Spatio-Temporal Metric-Semantic SLAM in Dynamic Environments",
    "venue": "RSS 2024",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A fast active window and slower global reasoning maintain a metric-semantic map through motion and long-term change.",
    "teachingHook": "What must a persistent robot map remember and forget?",
    "rationale": "Dynamic mapping companion",
    "url": "https://www.roboticsproceedings.org/rss20/p081.html",
    "placement": "Backup — robotics"
  },
  {
    "topic": "3D Representations for Manipulation",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Equivariance"
    ],
    "title": "Neural Descriptor Fields: SE(3)-Equivariant Object Representations for Manipulation",
    "venue": "ICRA 2022",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Continuous SE(3)-equivariant descriptor fields represent objects and relative poses for manipulation.",
    "teachingHook": "What invariance or equivariance should a manipulation representation guarantee?",
    "rationale": "Historical feature-field anchor",
    "url": "https://ieeexplore.ieee.org/document/9812146/",
    "placement": "Backup — robotics"
  },
  {
    "topic": "3D Representations for Manipulation",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Point cloud"
    ],
    "title": "3D Diffusion Policy: Generalizable Visuomotor Policy Learning via Simple 3D Representations",
    "venue": "RSS 2024",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A compact sparse point cloud and small encoder provide strong few-shot imitation and viewpoint generalization.",
    "teachingHook": "How much representation machinery does robot learning actually need?",
    "rationale": "Simple-representation counterpoint to feature fields",
    "url": "https://www.roboticsproceedings.org/rss20/p067.html",
    "placement": "Backup — robotics"
  },
  {
    "topic": "3D World Models",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Robotics",
      "World model"
    ],
    "title": "Learning 3D Dynamic Scene Representations for Robot Manipulation",
    "venue": "CoRL 2020 / PMLR 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "An object-centric 3D state targets permanence, amodal completeness, temporal continuity, and model-predictive control.",
    "teachingHook": "Which properties of a world state are required for closed-loop manipulation?",
    "rationale": "Historical pairing for PointWorld",
    "url": "https://proceedings.mlr.press/v155/xu21b.html",
    "placement": "Backup — robotics"
  },
  {
    "topic": "Articulated Object Interaction",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Embodied",
      "Articulation"
    ],
    "title": "Where2Act: From Pixels to Actions for Articulated 3D Objects",
    "venue": "ICCV 2021",
    "review": "Peer-reviewed",
    "signal": "Seminal",
    "contribution": "Actionable part and motion proposals connect articulated-object geometry to interaction.",
    "teachingHook": "How should perception expose affordances rather than only reconstruct shape?",
    "rationale": "Background for sim-ready articulated assets",
    "url": "https://cs.stanford.edu/~kaichun/where2act/",
    "placement": "Backup — robotics"
  },
  {
    "topic": "Articulated Object Interaction",
    "tier": "Alternate",
    "era": "Classic (≤2024)",
    "tags": [
      "Embodied",
      "Articulation"
    ],
    "title": "GAPartNet: Cross-Category Domain-Generalizable Object Perception and Manipulation via Generalizable and Actionable Parts",
    "venue": "CVPR 2023 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "Generalizable actionable parts support perception and manipulation across articulated categories.",
    "teachingHook": "Do part semantics transfer better than category-specific object models?",
    "rationale": "Background for SPARK and PhysX-Anything",
    "url": "https://pku-epic.github.io/GAPartNet/",
    "placement": "Backup — robotics"
  },
  {
    "topic": "Manipulation-Ready Reconstruction",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Reconstruction"
    ],
    "title": "Robo3R: Enhancing Robotic Manipulation with Accurate Feed-Forward 3D Reconstruction",
    "venue": "RSS 2026",
    "review": "Peer-reviewed",
    "signal": "Accepted",
    "contribution": "Feed-forward reconstruction is redesigned around metric scale, a robot-centric frame, sharp geometry, and difficult materials.",
    "teachingHook": "Which reconstruction metrics actually predict manipulation success?",
    "rationale": "Recent manipulation-ready reconstruction anchor",
    "url": "https://roboticsconference.org/program/papers/56/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D Representations for Manipulation",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Pretraining"
    ],
    "title": "DiffuView: Multi-View Diffusion Pretraining for 3D Aware Robotic Manipulation",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Multi-view diffusion pretraining learns a 3D-aware visual representation for robotic manipulation.",
    "teachingHook": "Does multi-view generative pretraining create the spatial invariance a manipulation policy needs?",
    "rationale": "Recent bundle lead",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_DiffuView_Multi-View_Diffusion_Pretraining_for_3D_Aware_Robotic_Manipulation_CVPR_2026_paper.pdf",
    "placement": "Main slot anchor"
  },
  {
    "topic": "3D Representations for Manipulation",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "Manipulation",
      "Prediction"
    ],
    "title": "Action-Geometry Prediction with 3D Geometric Prior for Bimanual Manipulation",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Future actions and future geometry are predicted jointly from a 3D geometric prior for bimanual manipulation.",
    "teachingHook": "Pretraining a 3D representation versus explicitly predicting future geometry.",
    "rationale": "Recent bundle companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Action-Geometry_Prediction_with_3D_Geometric_Prior_for_Bimanual_Manipulation_CVPR_2026_paper.pdf",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "3D World Models",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics",
      "World model",
      "Frontier"
    ],
    "title": "PAIWorld: A 3D-Consistent World Foundation Model for Robotic Manipulation",
    "venue": "arXiv 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "Cross-view attention, camera-aware position encoding, and 3D distillation improve multi-view robot world-model consistency.",
    "teachingHook": "Does geometric consistency translate into better action prediction and control?",
    "rationale": "Frontier contrast to PointWorld",
    "url": "https://arxiv.org/abs/2606.18375",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Depth Anything 3: Recovering the Visual Space from Any Views",
    "venue": "ICLR 2026 Oral",
    "review": "Peer-reviewed",
    "signal": "Oral",
    "contribution": "A plain transformer recovers consistent metric geometry from any number of views using a depth-and-ray target.",
    "teachingHook": "Is generalization driven more by architecture, supervision, or data scale?",
    "rationale": "Successor to VGGT / Pi³",
    "url": "https://arxiv.org/abs/2511.10647",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "MoRE: 3D Visual Geometry Reconstruction Meets Mixture-of-Experts",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Routed experts scale dense visual geometry and pair geometry with aligned semantic features.",
    "teachingHook": "Does expert specialization buy more than a simpler backbone and better training recipe?",
    "rationale": "Compare with DA3",
    "url": "https://arxiv.org/abs/2510.27234",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Visual Geometry Foundation Models",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Unlocking the Power of Critical Factors for 3D Visual Geometry Estimation",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A systematic study isolates data, loss, alignment, and refinement choices and builds CARVE from the findings.",
    "teachingHook": "A rare methods paper for separating robust empirical lessons from architectural novelty.",
    "rationale": "Training-recipe update to the 2025 geometry block",
    "url": "https://arxiv.org/abs/2604.21713",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "ZipMap: Linear-Time Stateful 3D Reconstruction via Test-Time Training",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Test-time-training layers compress an unordered image set into a compact scene state for linear-time reconstruction.",
    "teachingHook": "What does feed-forward mean when model weights themselves become scene memory at inference?",
    "rationale": "Scalable successor to Fast3R",
    "url": "https://arxiv.org/abs/2603.04385",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "LongStream: Long-Sequence Streaming Autoregressive Visual Geometry",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Keyframe-relative poses, metric-scale disentanglement, and cache-consistent training enable kilometer-scale streaming reconstruction.",
    "teachingHook": "A concrete discussion of gauge choice, scale drift, and KV-cache degradation.",
    "rationale": "Online successor to Fast3R / Spann3R",
    "url": "https://arxiv.org/abs/2602.13172",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "MERG3R: A Divide-and-Conquer Approach to Large-Scale Neural Visual Geometry",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A training-free pipeline partitions unordered collections, reconstructs subsets, and merges them with alignment and bundle adjustment.",
    "teachingHook": "Why do classical decomposition and optimization remain useful around foundation models?",
    "rationale": "Pairs learned geometry with classical global optimization",
    "url": "https://arxiv.org/abs/2603.02351",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Neural SfM & Online Reconstruction",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Global Structure-from-Motion Meets Feedforward Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Feed-forward priors are integrated with the scalability and robustness mechanisms of a global SfM pipeline.",
    "teachingHook": "Where should learned priors enter a geometric pipeline, and which failure modes remain classical?",
    "rationale": "Successor to VGGSfM",
    "url": "https://arxiv.org/abs/2605.26103",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Neural SfM & Online Reconstruction",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "TALO: Pushing 3D Vision Foundation Models Towards Globally Consistent Online Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Propagated control points and thin-plate-spline alignment correct spatially varying inconsistency between online submaps.",
    "teachingHook": "Why can rigid or Sim(3) alignment be insufficient for learned geometry predictions?",
    "rationale": "Successor to MASt3R-SLAM",
    "url": "https://arxiv.org/abs/2512.02341",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Neural SfM & Online Reconstruction",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "MV-RoMa: From Pairwise Matching into Multi-View Track Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Dense pairwise matches are jointly refined across co-visible views to form globally consistent tracks for SfM.",
    "teachingHook": "Pairwise match accuracy versus track consistency and bundle-adjustment utility.",
    "rationale": "Successor to VGGSfM correspondence stack",
    "url": "https://arxiv.org/abs/2603.27542",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Robust & Efficient Gaussian Rendering",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "Faster 3D Gaussian Splatting Convergence via Structure-Aware Densification",
    "venue": "SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Conference paper",
    "contribution": "Multiscale frequency analysis and anisotropic, multi-view-consistent splitting replace gradient-only densification.",
    "teachingHook": "Reframe densification as sampling and resource allocation rather than a speed-trick checklist.",
    "rationale": "Successor to Taming 3DGS / DashGaussian",
    "url": "https://vcai.mpi-inf.mpg.de/projects/SAD-GS/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Scalable & Online Neural Scenes",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "A LoD of Gaussians: Out-of-Core Training and Rendering for Seamless Ultra-Large Scene Reconstruction",
    "venue": "SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Conference paper",
    "contribution": "A dynamic out-of-core LoD hierarchy trains and renders 150M+ Gaussians on consumer GPUs without scene partitioning.",
    "teachingHook": "Representation and data-structure co-design under VRAM and bandwidth constraints.",
    "rationale": "Successor to hierarchical 3DGS",
    "url": "https://felixwindisch.github.io/ALoDOfGaussians/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Scalable & Online Neural Scenes",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "Immediate 3D Gaussian Splat Reconstruction of Unordered Input with Global Consistency",
    "venue": "SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Conference paper",
    "contribution": "Place recognition, covisibility graphs, loop closure, and a progressive hierarchy give immediate feedback for ordered or unordered capture.",
    "teachingHook": "A bridge among SfM, SLAM, loop closure, and radiance-field capture.",
    "rationale": "Successor to on-the-fly reconstruction",
    "url": "https://arxiv.org/abs/2607.14481",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Scalable & Online Neural Scenes",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "CaT-GS: Efficient 3DGS Rendering for Large-Scale Scenes with Inter-frame Caching",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Inter-frame caching reduces redundant Gaussian rendering work in large scenes.",
    "teachingHook": "Which temporal and visibility assumptions make caching reliable, and when do they break?",
    "rationale": "Large-scene rendering companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_CaT-GS_Efficient_3DGS_Rendering_for_Large-Scale_Scenes_with_Inter-frame_Caching_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Physically Editable & Inverse Rendering",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "EAG-PT: Emission-Aware Gaussians and Path Tracing for Diffuse Indoor Scene Reconstruction and Editing",
    "venue": "SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Conference paper",
    "contribution": "Emission-aware 2D Gaussians support differentiable light transport during reconstruction and multi-bounce path tracing after edits.",
    "teachingHook": "Why baked radiance fails after edits; geometry, emission, visibility, and global illumination must separate.",
    "rationale": "Successor to ARM / RelitLRM",
    "url": "https://eag-pt.github.io/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Physically Editable & Inverse Rendering",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "MatSpray: Fusing 2D Material World Knowledge on 3D Geometry",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "2D diffusion priors predict PBR maps that are fused into Gaussian geometry and refined for multi-view consistency.",
    "teachingHook": "How should generative material priors be constrained by physics and cross-view evidence?",
    "rationale": "Material-centric update to relighting",
    "url": "https://matspray.jdihlmann.com/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Surfaces, Meshes & CAD",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "SOF: Sorted Opacity Fields for Fast Unbounded Surface Reconstruction",
    "venue": "SIGGRAPH Asia 2025",
    "review": "Peer-reviewed",
    "signal": "Conference paper",
    "contribution": "Sorting-aware opacity fields and parallel Marching Tetrahedra turn Gaussian scenes into accurate unbounded meshes.",
    "teachingHook": "Connect alpha compositing, level sets, sorting, and explicit mesh extraction.",
    "rationale": "Successor to SuGaR / Gaussian surfels",
    "url": "https://r4dl.github.io/SOF/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Surfaces, Meshes & CAD",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "3D Gaussian Splatting with Self-Constrained Priors for High Fidelity Surface Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A progressively tightened TSDF band from rendered depth prunes and regularizes Gaussians toward coherent surfaces.",
    "teachingHook": "The rendering-versus-geometry tension in 3DGS, linked back to classical TSDF fusion.",
    "rationale": "Successor to surface reconstruction block",
    "url": "https://arxiv.org/abs/2603.19682",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Native & Structured 3D Generation",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "SAM 3D: 3Dfy Anything in Images",
    "venue": "CVPR 2026 Honorable Mention",
    "review": "Peer-reviewed",
    "signal": "Best Paper HM",
    "contribution": "A general image-to-3D system targets open-world objects and scenes with a scalable data and modeling pipeline.",
    "teachingHook": "What transfers from 2D foundation-model scaling to open-world 3D, and what does not?",
    "rationale": "New open-world generation anchor",
    "url": "https://ai.meta.com/research/sam3d/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Native & Structured 3D Generation",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "PartCrafter: Structured 3D Mesh Generation via Compositional Latent Diffusion Transformers",
    "venue": "NeurIPS 2025",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Compositional latents and within-part/across-part attention jointly generate semantically distinct meshes from one image.",
    "teachingHook": "Monolithic asset latents versus explicit part structure.",
    "rationale": "Successor to part segmentation + 3D generation",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/32cc61322f1e2f56f989d29ccc7cfbb7-Abstract-Conference.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Native & Structured 3D Generation",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Nexus: Native Mesh Generation with Diffusion",
    "venue": "ACM TOG / SIGGRAPH 2026",
    "review": "Peer-reviewed",
    "signal": "Journal track",
    "contribution": "A diffusion model generates native meshes rather than converting an intermediate volumetric or implicit representation.",
    "teachingHook": "Native mesh bias versus representation-agnostic generation and post-hoc extraction.",
    "rationale": "New mesh-generation direction",
    "url": "https://arxiv.org/abs/2607.13563",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied"
    ],
    "title": "SAGE: Scalable Agentic 3D Scene Generation for Embodied AI",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Task-conditioned agents compose generators with semantic, visual, and physical critics and repair scenes until simulator-ready.",
    "teachingHook": "Agentic scene synthesis as a closed-loop system rather than one-shot generation.",
    "rationale": "New topic",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Xia_SAGE_Scalable_Agentic_3D_Scene_Generation_for_Embodied_AI_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "WorldGen: From Text to Traversable and Interactive 3D Worlds",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "LLM layout reasoning, procedural blockouts, navmeshes, 3D generation, and texturing create editable game-engine worlds.",
    "teachingHook": "Traversability, editability, and modular full-system tradeoffs.",
    "rationale": "New topic",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Wang_WorldGen_From_Text_to_Traversable_and_Interactive_3D_Worlds_CVPR_2026_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Vinedresser3D: Towards Agentic Text-guided 3D Editing",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "An agent plans and executes text-guided edits in 3D while preserving geometry and scene consistency.",
    "teachingHook": "Where does agent planning help beyond a strong native 3D editor?",
    "rationale": "Successor to EditSplat",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Chi_Vinedresser3D_Towards_Agentic_Text-guided_3D_Editing_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "WorldClaw: Agentic 3D Open-World Generation at Scale",
    "venue": "arXiv, Aug. 2026",
    "review": "Unreviewed preprint",
    "signal": "Ultra-fresh",
    "contribution": "Coarse-to-fine agents plan terrain, assets, materials, and relations, then refine and repair an editable open world.",
    "teachingHook": "A very timely alternative to SAGE/WorldGen; audit benchmark design, ablations, and reproducibility.",
    "rationale": "New topic; from second TA sheet",
    "url": "https://arxiv.org/abs/2608.05248",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Reconstruction–Generation Convergence",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Gen3R: 3D Scene Generation Meets Feed-Forward Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "VGGT geometry tokens are aligned with video-diffusion appearance latents to produce RGB, poses, depth, and global point clouds.",
    "teachingHook": "When do reconstruction and generation genuinely help each other rather than hide geometric errors?",
    "rationale": "New topic joining 2025 geometry and video blocks",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Huang_Gen3R_3D_Scene_Generation_Meets_Feed-Forward_Reconstruction_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Reconstruction–Generation Convergence",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "NeoVerse: Enhancing 4D World Model with in-the-wild Monocular Videos",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "One model performs pose-free feed-forward 4D reconstruction and novel-trajectory video generation using weak in-the-wild video.",
    "teachingHook": "How can noisy monocular video scale 4D learning without collapsing metric or temporal consistency?",
    "rationale": "New topic",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Yang_NeoVerse_Enhancing_4D_World_Model_with_in-the-wild_Monocular_Videos_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Reconstruction Representations",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Inferring Compositional 4D Scenes without Ever Seeing One",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "COM4D factorizes spatial composition and temporal dynamics so it can recover multi-object 4D scenes without compositional-4D training examples.",
    "teachingHook": "A memorable case of solving data scarcity through factorized supervision.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Gokmen_Inferring_Compositional_4D_Scenes_without_Ever_Seeing_One_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Reconstruction Representations",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Any4D: Unified Feed-Forward Metric 4D Reconstruction",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A feed-forward model unifies metric 4D reconstruction across diverse inputs and motion patterns.",
    "teachingHook": "How far can a single metric formulation generalize across dynamic-scene conditions?",
    "rationale": "New generalist 4D model",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Karhade_Any4D_Unified_Feed-Forward_Metric_4D_Reconstruction_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "ActionMesh: Animated 3D Mesh Generation with Temporal 3D Diffusion",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A temporal 3D autoencoder and diffusion model generate fast, topology-consistent, rig-free animated meshes.",
    "teachingHook": "A clean bridge among video priors, 3D diffusion, correspondence, and production topology.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Sabathier_ActionMesh_Animated_3D_Mesh_Generation_with_Temporal_3D_Diffusion_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Choreographing a World of Dynamic Objects",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "CHORD distills Lagrangian 3D motion from Eulerian video priors for category-agnostic deformation and interaction.",
    "teachingHook": "Eulerian video versus editable Lagrangian object motion.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Lyu_Choreographing_a_World_of_Dynamic_Objects_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "NeuROK: Generative 4D Neural Object Kinematics",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A learned kinematic state space evolves with a Lagrangian-mechanics formulation across diverse physical object types.",
    "teachingHook": "Learned kinematics and latent mechanics versus fixed simulators or per-category deformation.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Geng_NeuROK_Generative_4D_Neural_Object_Kinematics_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "AniMimic: Imitating 3D Animation from Video Priors",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A video prior guides skeleton, skinning, differentiable rendering, and soft-tissue simulation to imitate animation.",
    "teachingHook": "Rig-based animation versus rig-free temporal diffusion.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xie_AniMimic_Imitating_3D_Animation_from_Video_Priors_CVPR_2026_paper.pdf",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Simulation-ready Articulated Assets",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied"
    ],
    "title": "ArtLLM: Generating Articulated Assets via 3D LLM",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A 3D multimodal LLM autoregressively predicts parts, joints, and a kinematic graph before generating part geometry.",
    "teachingHook": "Sequence modeling of a kinematic program versus image-guided optimization.",
    "rationale": "New topic",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Wang_ArtLLM_Generating_Articulated_Assets_via_3D_LLM_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Simulation-ready Articulated Assets",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied"
    ],
    "title": "Skin Tokens: A Learned Compact Representation for Unified Autoregressive Rigging",
    "venue": "arXiv, Feb. 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "Discrete skinning codes let one autoregressive model predict skeleton parameters and skinning in a compact sequence.",
    "teachingHook": "Turning ill-posed continuous rigging into discrete sequence modeling; pair with SPARK.",
    "rationale": "From second TA sheet",
    "url": "https://arxiv.org/abs/2602.04805",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Physical 4D & Neural Simulators",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family",
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "PhysGM: Large Physical Gaussian Model for Feed-Forward 4D Synthesis",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "A model jointly predicts Gaussians and uncertain physical properties, then amortizes physics-grounded 4D synthesis.",
    "teachingHook": "Inverse physics, uncertainty, learned simulation priors, and preference optimization in one system.",
    "rationale": "Successor to physics-grounded 3D",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Lv_PhysGM_Large_Physical_Gaussian_Model_for_Feed-Forward_4D_Synthesis_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Physical 4D & Neural Simulators",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "PerpetualWonder: Long-Horizon Action-Conditioned 4D Scene Generation",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "A persistent particle state closes the loop between physical rollout, video refinement, and multi-view neural refinement across sequential actions.",
    "teachingHook": "Why long-horizon interaction needs an updateable physical state rather than one-shot animation.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhan_PerpetualWonder_Long-horizon_Action-conditioned_4D_Scene_Generation_CVPR_2026_paper.html",
    "placement": "Bundle companion / backup"
  },
  {
    "topic": "Persistent Geometric World Models",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "WorldReel: 4D Video Generation with Consistent Geometry and Motion Modeling",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "RGB, point maps, camera trajectories, and dense 2D/3D flow are generated jointly from one explicit 4D scene.",
    "teachingHook": "Explicit geometry inside a generator; disentangle camera motion from scene motion.",
    "rationale": "Successor to GEN3C",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Fang_WorldReel_4D_Video_Generation_with_Consistent_Geometry_and_Motion_Modeling_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Persistent Geometric World Models",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Video World Models with Long-term Spatial Memory",
    "venue": "NeurIPS 2025",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A geometry-grounded memory stores and retrieves spatial state so video worlds remain consistent when locations are revisited.",
    "teachingHook": "Persistent spatial memory as a representation problem distinct from a longer context window.",
    "rationale": "New topic",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/467655d26fcc207bca08915dc91964c6-Abstract-Conference.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Persistent Geometric World Models",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video",
    "venue": "ACM Multimedia 2026",
    "review": "Peer-reviewed",
    "signal": "Accepted",
    "contribution": "Anchor-relative object transitions form a compact, queryable long-term 4D memory without full global reconstruction.",
    "teachingHook": "Is a structured relative scene graph more useful than a complete metric world model for long-horizon reasoning?",
    "rationale": "New topic",
    "url": "https://arxiv.org/abs/2608.11017",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Semantic Foam: Unifying Spatial and Semantic Scene Decomposition",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "Voronoi cells jointly regularize spatial and semantic scene decomposition, reducing view- and occlusion-induced inconsistency.",
    "teachingHook": "A representation-first comparison against overlapping, semantically ambiguous Gaussian primitives.",
    "rationale": "Successor to Dr. Splat",
    "url": "https://semanticfoam.github.io/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "Uni3R: Unified 3D Reconstruction and Semantic Understanding via Generalizable Gaussian Splatting from Unposed Multi-View Images",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "One feed-forward Gaussian representation jointly carries geometry, appearance, depth, and open-vocabulary semantics.",
    "teachingHook": "Can one representation serve reconstruction and language-level understanding without per-scene optimization?",
    "rationale": "Successor to multimodality + generalisable reconstruction",
    "url": "https://arxiv.org/abs/2508.03643",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "REALM: An MLLM-Agent Framework for Open World 3D Reasoning Segmentation and Editing on Gaussian Splatting",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "An MLLM agent selects global-to-local rendered views, grounds reasoning-based object masks, and supports 3D editing.",
    "teachingHook": "2D MLLM intelligence versus 3D consistency; embedding similarity versus compositional reasoning.",
    "rationale": "Successor to Dr. Splat / EditSplat",
    "url": "https://changyueshi.github.io/REALM/",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "EVA01: Unified Native 3D Understanding and Generation via Mixture-of-Transformers",
    "venue": "Technical report / arXiv, May 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "One mixture-of-transformers natively handles mesh understanding, generation, and multi-turn editing.",
    "teachingHook": "Is 3D a native modality, or merely an external tool and output for an MLLM?",
    "rationale": "New 3D-native multimodal topic",
    "url": "https://arxiv.org/abs/2605.16745",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Companion",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family",
      "Robotics / embodied"
    ],
    "title": "EmbodiedSplat: Online Feed-Forward Semantic 3DGS for Open-Vocabulary 3D Scene Understanding",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A sparse coefficient field and global CLIP codebook reconstruct semantic 3DGS online from long image streams.",
    "teachingHook": "Online feed-forward inference versus offline per-scene optimization and semantic memory cost.",
    "rationale": "Embodied semantic mapping",
    "url": "https://arxiv.org/abs/2603.04254",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Embodied 3D World Models & Planning",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family",
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "MAGICIAN: Efficient Long-Term Planning with Imagined Gaussians for Active Mapping",
    "venue": "CVPR 2026 Oral",
    "review": "Peer-reviewed",
    "signal": "Oral",
    "contribution": "Predicted occupancy is converted into imagined Gaussians for fast coverage rendering and long-horizon tree-search planning.",
    "teachingHook": "A 3D representation as a planning sufficient statistic, not just a reconstruction output.",
    "rationale": "Successor to Splat-Nav",
    "url": "https://shiyao-li.github.io/magician/",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Beyond RGB & Scientific Representations",
    "tier": "Core",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "ESVR: 3D Ellipsoid-based Sparse Volume Rendering via Structure-aware Primitive Learning and Per-primitive Ray Sampling",
    "venue": "IEEE VIS 2026",
    "review": "Peer-reviewed",
    "signal": "Accepted",
    "contribution": "Bounded ellipsoid primitives compress scientific volumes while retaining transfer-function control and real-time rendering.",
    "teachingHook": "Extend neural representation beyond photographs to scientific data and explicit transfer functions.",
    "rationale": "New topic",
    "url": "https://arxiv.org/abs/2608.05564",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Beyond RGB & Scientific Representations",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "EvTrajGS: Accurate and Efficient 3D Gaussian Splatting from Unposed Event Streams",
    "venue": "arXiv, Aug. 2026",
    "review": "Unreviewed preprint",
    "signal": "Ultra-fresh",
    "contribution": "A continuous-time trajectory and event sampling jointly optimize camera motion and Gaussians from asynchronous events.",
    "teachingHook": "What changes when the sensor measures brightness changes instead of RGB frames?",
    "rationale": "New event-native topic",
    "url": "https://arxiv.org/abs/2608.08585",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Beyond RGB & Scientific Representations",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "FLAT: Feedforward Latent Triangle Splatting for Geometrically Accurate Scene Generation",
    "venue": "arXiv, Jun. 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "Video-diffusion latents decode directly into rasterizable triangle splats with explicit, interaction-ready geometry.",
    "teachingHook": "Compare 3DGS, 2DGS, and triangle splats under the same training regime; audit metric geometry.",
    "rationale": "New representation beyond Gaussians",
    "url": "https://arxiv.org/abs/2606.24876",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "VGG-T³: Offline Feed-Forward 3D Reconstruction at Scale",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A fixed-size test-time-trained MLP stores variable-length scene context and scales to roughly 1,000 views.",
    "teachingHook": "Compare closely related test-time scene-memory formulations.",
    "rationale": "Pairs with ZipMap",
    "url": "https://arxiv.org/abs/2602.23361",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "FlashVGGT: Efficient and Scalable Visual Geometry Transformers with Compressed Descriptor Attention",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Descriptor tokens compress global attention and recursively support thousand-view inference.",
    "teachingHook": "A compact lesson in token compression and approximation of global attention.",
    "rationale": "Successor to Fast3R",
    "url": "https://arxiv.org/abs/2512.01540",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Neural SfM & Online Reconstruction",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "Dynamic Visual SLAM using a General 3D Prior",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Online bundle adjustment uses a 3D prior for dynamic filtering, depth, and scale resolution.",
    "teachingHook": "A clean learned-prior-plus-classical-BA system.",
    "rationale": "Successor to MASt3R-SLAM",
    "url": "https://arxiv.org/abs/2512.06868",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Neural SfM & Online Reconstruction",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "Emergent Outlier View Rejection in Visual Geometry Grounded Transformers",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "An internal visual-geometry layer separates distractor views and enables view rejection without retraining.",
    "teachingHook": "Representation probing and emergent robustness rather than another leaderboard system.",
    "rationale": "Analysis companion to VGGT",
    "url": "https://arxiv.org/abs/2512.04012",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Robust & Efficient Gaussian Rendering",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "FastGS: Training 3D Gaussian Splatting in 100 Seconds",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "An aggressively optimized training recipe cuts per-scene 3DGS convergence to roughly 100 seconds.",
    "teachingHook": "Use as a systems comparison to structure-aware densification.",
    "rationale": "Successor to fast training",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Ren_FastGS_Training_3D_Gaussian_Splatting_in_100_Seconds_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Physically Editable & Inverse Rendering",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "Path-Traced Inverse Rendering with Global Illumination in 3D Gaussian Fields",
    "venue": "arXiv 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "Forward rendering and inverse gradients share a splatting-free path-tracing formulation over Gaussian fields.",
    "teachingHook": "Screen-space G-buffers versus pathwise gradients and Monte Carlo transport.",
    "rationale": "Advanced pair for EAG-PT",
    "url": "https://junkzhu.github.io/project_pages/PTIR/",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Surfaces, Meshes & CAD",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "Distilling Unsigned Distance Function for Surface Reconstruction from 3D Gaussian Splatting",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Visibility-aware weighting distills Gaussian geometry into a continuous UDF for open and closed surfaces.",
    "teachingHook": "SDF versus UDF and discrete-to-continuous geometry transfer.",
    "rationale": "Surface companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Distilling_Unsigned_Distance_Function_for_Surface_Reconstruction_from_3D_Gaussian_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Surfaces, Meshes & CAD",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "GS / splat family"
    ],
    "title": "BrepGaussian: CAD Reconstruction from Multi-View Images with Gaussian Splatting",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Gaussians encode geometry, edges, and patches before constraint-guided fitting recovers a complete B-rep CAD model.",
    "teachingHook": "From unstructured radiance primitives to editable parametric geometry.",
    "rationale": "New CAD subtopic",
    "url": "https://arxiv.org/abs/2602.21105",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied"
    ],
    "title": "Edit-As-Act: Goal-Regressive Planning for Open-Vocabulary 3D Indoor Scene Editing",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Goal-regressive planning decomposes open-vocabulary indoor editing into executable 3D actions.",
    "teachingHook": "Planning as a method for 3D editing rather than just language-conditioned optimization.",
    "rationale": "Successor to EditSplat",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Noh_Edit-As-Act_Goal-Regressive_Planning_for_Open-Vocabulary_3D_Indoor_Scene_Editing_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Agentic & Navigable 3D Worlds",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "ReSpace: Text-Driven Autoregressive 3D Indoor Scene Synthesis and Editing",
    "venue": "ICLR 2026 ES-Reasoning Workshop Oral",
    "review": "Workshop",
    "signal": "Workshop oral",
    "contribution": "A compact structured scene language supports autoregressive indoor synthesis and editing.",
    "teachingHook": "Teachable but narrower and less validated than SAGE or WorldGen.",
    "rationale": "From second TA sheet",
    "url": "https://openreview.net/forum?id=WPP6ThdEzk",
    "placement": "Frontier Watch"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Motion 3-to-4: 3D Motion Reconstruction for 4D Synthesis",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Recovered 3D motion is used as a controllable prior for 4D synthesis.",
    "teachingHook": "Reconstruction-derived control versus direct temporal 3D diffusion.",
    "rationale": "Dynamic generation companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Chen_Motion_3-to-4_3D_Motion_Reconstruction_for_4D_Synthesis_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "4D Motion & Dynamic Asset Generation",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "Sculpt4D: Generating 4D Shapes via Sparse-Attention Diffusion Transformers",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Sparse-attention diffusion generates temporally evolving 4D shapes.",
    "teachingHook": "Token sparsity and temporal consistency in generative 4D modeling.",
    "rationale": "Dynamic generation companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Yin_Sculpt4D_Generating_4D_Shapes_via_Sparse-Attention_Diffusion_Transformers_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Simulation-ready Articulated Assets",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "RigMo: Unifying Rig and Motion Learning for Generative Animation",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "Rig and motion are learned jointly for controllable generative animation.",
    "teachingHook": "Joint versus staged rigging and motion pipelines.",
    "rationale": "Rigging companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_RigMo_Unifying_Rig_and_Motion_Learning_for_Generative_Animation_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Semantic & Multimodal 3D Intelligence",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "4D / world model"
    ],
    "title": "4D-RGPT: Toward Region-level 4D Understanding via Perceptual Distillation",
    "venue": "CVPR 2026 Highlight",
    "review": "Peer-reviewed",
    "signal": "Highlight",
    "contribution": "Region-level perceptual distillation equips an MLLM for localized 4D understanding.",
    "teachingHook": "Useful only if the course adds a dedicated 4D-language understanding block.",
    "rationale": "From second TA sheet",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Yang_4D-RGPT_Toward_Region-level_4D_Understanding_via_Perceptual_Distillation_CVPR_2026_paper.html",
    "placement": "Backup — 2026 sweep"
  },
  {
    "topic": "Embodied 3D World Models & Planning",
    "tier": "Alternate",
    "era": "Recent (2025–26)",
    "tags": [
      "Robotics / embodied",
      "4D / world model"
    ],
    "title": "Dexterous World Models",
    "venue": "CVPR 2026",
    "review": "Peer-reviewed",
    "signal": "Main conference",
    "contribution": "A learned world model targets dexterous manipulation dynamics and planning.",
    "teachingHook": "Useful for asking how world-model state should represent contact-rich hands and objects.",
    "rationale": "Embodied companion",
    "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Kim_Dexterous_World_Models_CVPR_2026_paper.html",
    "placement": "Main slot anchor"
  },
  {
    "topic": "Surface Reconstruction / Implicit Geometry",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "IVGT: Implicit Visual Geometry Transformer for Neural Scene Representation",
    "venue": "arXiv, May 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "A canonical continuous scene can be queried for SDF, color, depth, normals, rendering, and pose.",
    "teachingHook": "Explicit point maps versus a continuous implicit representation.",
    "rationale": "Successor to visual geometry + surfaces",
    "url": "https://arxiv.org/abs/2605.16258",
    "placement": "Frontier Watch"
  },
  {
    "topic": "Stateful & Streaming Reconstruction",
    "tier": "Frontier",
    "era": "Recent (2025–26)",
    "tags": [
      "Core 3DV"
    ],
    "title": "R³: 3D Reconstruction via Relative Regression",
    "venue": "arXiv, May 2026",
    "review": "Unreviewed preprint",
    "signal": "Frontier",
    "contribution": "Confidence-weighted pairwise relative poses support both full-context and bounded-memory causal reconstruction.",
    "teachingHook": "A very teachable relative-coordinate formulation, but still unreviewed.",
    "rationale": "Successor to Pi³",
    "url": "https://arxiv.org/abs/2605.26519",
    "placement": "Frontier Watch"
  }
];
