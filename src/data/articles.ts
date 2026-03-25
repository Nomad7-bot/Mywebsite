// src/data/articles.ts
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image_grid'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'list'; items: string[] };

export interface Article {
  id: string;
  category: 'Tech' | 'Eat' | 'Lifestyle' | 'Etc' | 'Design' | 'Architecture';
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    id: 'ritual-morning-pourover',
    category: 'Eat',
    date: 'Oct 24, 2024',
    title: 'The Ritual of Morning Pour-Over.',
    summary: 'Finding clarity in the slow process of artisanal coffee brewing. A meditation on heat, timing, and sensory focus that transforms a morning routine into a sacred daily ritual.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFTbrD1sAUjNB8DRy-DpGEo9g_kEb7MQKTnCIA-WoyxACAJm9mYONZ-7JGZKXFrviZ6qCuVNoNKZ_iS8WxyKC81Qqh-PBTNnHgAp33UkLT7BcF2O6H7b7gLGEKPn5SPbZsXFNUFK6YH8TU-7JX4kMefO0wxEKQAY6QsWjYcTjluP2gOzRAB6n3srKxqAvTZHzg6pxSe4R0n0gLXKxJRI76uepmDrSawP0i_WRkIcUKKCwTgzNgZ3t3vww4gOtGHKz_2BlJzkYgxQ',
    imageAlt: 'close-up of ceramic coffee dripper',
    content: [
      { type: 'paragraph', text: 'There is a meditative quality to pour-over coffee that no espresso machine can replicate. The process demands your full presence — a precise kettle pour, a bloom, a patience that modern life rarely asks of us. In slowing down to make a single cup, you create a ritual that anchors the entire day.' },
      { type: 'paragraph', text: 'The variables are deceptively simple: water temperature, grind size, pour rate, and time. Yet their interplay produces a spectrum of flavors that reflects the care invested. A rushed brew tastes like distraction. A deliberate one tastes like intention.' },
      { type: 'quote', text: 'The quality of your morning determines the quality of your day. A ritual is not superstition — it is a designed behavior.', author: 'James Clear' },
      { type: 'heading', text: 'The Science of Bloom' },
      { type: 'paragraph', text: 'When hot water first meets fresh grounds, carbon dioxide is released in a process called degassing. This bloom — a 30-second pre-infusion — prepares the coffee for an even extraction. Skipping it is the most common mistake beginners make. The bloom is not optional; it is the foundation.' },
      { type: 'image_grid', images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuXS3kgZ2KT1XKSUi_AblMO1usBOjtsYMVsUy25IQejW2mxhWdb-Br_-QBUSUdi9sJRmjHdN6b1aQf_CTk_d5QtE5CRtPedVuTYDl-C6H3D5nZZ-CRSkItvNe398o7a7RFH8p-ZcYz-Egu-5odUwhmOMdSV1V6w2YAqpdGP_0Oi8rQBVyUM0wVnI8DnHoBDiNONlz0D1n5YrkQoG_Vg5t8no7EDXIpSYcrBrXiSkszj10ssj9g2_W5wKn6fChb8FntEPtSUmUzxw', alt: 'Shadow play in modern geometry', caption: 'Shadow play in modern geometry.' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs4rZRy_P-h5DPKn2roboKiA2lxLgShpAPkg00nKAPE0wPBzxx0oxb5SfXqrCiv3dAPquUU-TDZBi_61yM0GiilhcyOQqF8VsUBTdenRTfGuFFW4Nv9lIUmPJBCgGE3BbRNkA50YoWgXrGHvqNZbl9R7QLHs4k32jK66qHoHDetJEHqrAtJpkpM66ZdY35i0vD3_xaGA0SiW9oGRBA8om0_iclt2NQxl0B6KHErTmX3Bd8tAAZq6jRwFn79sdXW-P_jgQt3Nf3zg', alt: 'Form following function in light oak', caption: 'Form following function in light oak.' },
      ]},
      { type: 'subheading', text: 'What You Need to Start' },
      { type: 'list', items: [
        'A gooseneck kettle — precision of pour matters more than you expect',
        'Medium-coarse grind, beans roasted within two weeks',
        'Digital scale with 0.1g accuracy',
        '93°C water temperature for most light roasts',
        'Ceramic or glass dripper — both are valid, both reward patience',
      ]},
      { type: 'paragraph', text: 'The ritual is not about the gear. It is about the decision to show up and pay attention, every morning, before the notifications begin.' },
    ],
  },
  {
    id: 'design-tools-next-decade',
    category: 'Tech',
    date: 'Oct 20, 2024',
    title: 'Design Tools for the Next Decade.',
    summary: 'Why the future of software feels more tactile and organic than ever before.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Jhq3Dh1yqGJ7Ryl-1yS6hktsHA8SZztanp-cjhlse-gDoMkHzBdotpfIqUf9W5z_lvOkuA1gD2RMV_-SK_p0ZtAdWWfur3JiqDvh07b4sOdQ-jthP-57Hjl3DUKPPtVDst1SfeBUtVFgm7ryv0oUXIPwruiduq_f42IVIzjy4PCNc7iRYq7wu-TMUt7k9g4SwuGc2qwHAcKYBUI6r8KUV_y_NdGcZQVQgjXM6qtKzgiClhUp_Bg-lRR1w-3ejXgZh05CBlZrcw',
    imageAlt: 'ultra-thin modern laptop on a light oak table',
    content: [
      { type: 'paragraph', text: 'The tools we use shape the work we make. For a decade, design software converged on a single paradigm: the infinite canvas, the vector node, the component library. It was productive, scalable, and — increasingly — frictionless to the point of sterility.' },
      { type: 'paragraph', text: 'Something is shifting. The next generation of design tools is reaching toward constraint rather than freedom, toward materiality rather than abstraction. Products like Figma\'s variable system, Apple\'s spatial interfaces, and the renewed interest in typography suggest a profession rediscovering the value of limits.' },
      { type: 'quote', text: 'Design is not just what it looks like and feels like. Design is how it works.', author: 'Steve Jobs' },
      { type: 'heading', text: 'The Return of Tactility' },
      { type: 'paragraph', text: 'When every surface became a screen, we lost the grain of the paper, the resistance of the key, the heft of the object. Spatial computing is attempting to restore this — not by simulating the physical, but by borrowing its emotional logic. The skeuomorphic era was right about one thing: texture communicates trust.' },
      { type: 'subheading', text: 'Patterns Worth Watching' },
      { type: 'list', items: [
        'AI-assisted layout that learns from intent, not just instruction',
        'Design tokens as the single source of truth across platforms',
        'Collaborative tools with real-time physics and constraint systems',
        'Haptic feedback design as a distinct discipline',
      ]},
      { type: 'paragraph', text: 'The designers who will define the next decade are not those who master the tools fastest, but those who understand what the tools cannot yet express — and build toward that gap.' },
    ],
  },
  {
    id: 'warmth-linen-oak',
    category: 'Lifestyle',
    date: 'Oct 15, 2024',
    title: 'The Warmth of Linen and Oak.',
    summary: 'A guide to selecting home materials that age with grace and character.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJHOcT7VloN_JpzXDrhVMRaq89s4AB18F1mVpjnPPl08k6eiSUwp-OtOiFCbJeDHIoTEbNufNxJcpQ9qWdiWkNnpOXVoIaC0SJhiIUZU43xGdco_XLzfdCkoBnyufOSSBgT1xDMa7YOXpSL-JpeiepWzaVpqvM7O5YHqd10G_Ge2hicFrp7_qSSxjGXreWatYCRhmD-NmEcYHnOTumJXOlJVLeamcMfE3yCpYzJfQPtEfp5d28zCxDsbY_NXwPrAddjbln-4AQ',
    imageAlt: 'elegant linen sofa with neutral toned pillows',
    content: [
      { type: 'paragraph', text: 'There is a kind of beauty that only arrives with time. Linen softens with every wash. Oak darkens and deepens as the years pass. These materials do not fight against aging — they collaborate with it. Choosing them is a commitment to a slower, more honest relationship with your home.' },
      { type: 'paragraph', text: 'The current obsession with matte black and engineered stone is understandable: both are decisive, both photograph well. But they are conclusions. Linen and oak are conversations. They ask you to live with them, and they reveal themselves gradually in return.' },
      { type: 'quote', text: 'A house is not a home until it carries the marks of its inhabitants.', author: 'Anonymous' },
      { type: 'heading', text: 'Choosing Materials That Last' },
      { type: 'paragraph', text: 'The most important question to ask of any material is not "how does it look?" but "how does it fail?" Linen wrinkles — and the wrinkles are beautiful. Oak scratches — and the scratches become a record. Concrete cracks — and the cracks are filled with history. Choose materials whose failure modes you can live with, and you will always live well.' },
      { type: 'subheading', text: 'A Starting Palette' },
      { type: 'list', items: [
        'Belgian linen for upholstery and cushions — pre-washed, undyed where possible',
        'White oak for flooring and furniture — oil-finished, not lacquered',
        'Unglazed ceramic for vessels and tableware',
        'Wool for rugs — flatwoven or low pile for easier aging',
        'Brass hardware left to develop its natural patina',
      ]},
      { type: 'paragraph', text: 'Start with one material done well. Let it set the tone for everything that follows. The room will compose itself around a single honest choice more gracefully than around a dozen calculated ones.' },
    ],
  },
  {
    id: 'philosophy-clean-code',
    category: 'Etc',
    date: 'Oct 12, 2024',
    title: 'The Philosophy of Clean Code.',
    summary: 'How writing code is remarkably similar to editing a literary essay.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJHBvewCjdv3S-PwkMohI5dy-Srwv1LliS9tCH1CY0eodM_YpEytyFPHEtAK9INQkk0m0hrC3-DqBOPlva6_uhIJ1EaVDh6CN-7juVH5Q7GPHXRztDbl7AOEQBfym2SxwEf-oRa6kjJKEL7NSYuUaSCvNVBmYRe4cItwk_E967oJ-HJVmUwhimFsCsseihcn_QTdluFQGP2bCP8GYCBR8nMIKgMcGHNfb59dI9H9Qs7BykKf6PUayeGAJFjLO1GqWR7cDa3fwWGw',
    imageAlt: 'dark code editor screen',
    content: [
      { type: 'paragraph', text: 'The first draft is always a lie. In writing, we call it a rough draft and accept it without shame. In code, we call it a prototype — and then, too often, ship it. The editorial instinct that transforms raw prose into literature is the same instinct that separates functional code from clean code.' },
      { type: 'paragraph', text: 'Clean code is not about following rules. It is about communicating intent. A function named `processData` tells you nothing. A function named `normalizeUserAddressFields` tells you everything. The difference is not technical — it is editorial. The author has made a decision about what the reader deserves to understand.' },
      { type: 'quote', text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
      { type: 'heading', text: 'Editing as Engineering' },
      { type: 'paragraph', text: 'The best editors are ruthless about removal. A sentence that requires effort to parse is a sentence that should be cut or rewritten. The same principle applies to code: complexity that cannot justify itself is complexity that should not exist. Every abstraction is a claim that its concept is worth naming. Earn that claim, or do not make it.' },
      { type: 'subheading', text: 'Principles Worth Keeping' },
      { type: 'list', items: [
        'Name things for what they do, not what they are',
        'A function that does two things is two functions waiting to be separated',
        'Comments explain why, not what — the code explains what',
        'Delete dead code without ceremony; version control remembers',
        'Read your code aloud. Awkward prose is awkward logic.',
      ]},
      { type: 'paragraph', text: 'The goal is not clever code. Cleverness is a private satisfaction. Clean code is a gift to the next person — who is, more often than not, yourself, six months from now, with no memory of writing any of it.' },
    ],
  },
  {
    id: 'geometry-of-silence',
    category: 'Architecture',
    date: 'Nov 02, 2024',
    title: 'The Geometry of Silence.',
    summary: 'A study of how Brutalist structures use raw materiality to create spaces of profound quietude and reflection in dense urban environments.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALtHKmyDYnBntY7epoNuWmJD08T0oGkFOq1avlOgXR7fRXdh2DguyjcURq0FPsGJdDFz4HT-YVHdodJZ8gcz43cukfD_MNQCcMkMf_ORzHnF2JSxqPgmLdu3ji_d54xd92PcRKmEcpGldMvHfJ2TcYJpTYnquoiAh82mYaaFHqHiiVvq-GwumZFA5GFYN41DeznF_KWWCRTbCGYKUbKkKMLmUjbFkxjwY0fpgsd0aM2RlI07hHD9cwicpufWtOFwxpb1YsXdMljA',
    imageAlt: 'brutalist architecture building',
    content: [
      { type: 'paragraph', text: 'Brutalism was never supposed to be brutal. The term derives from béton brut — raw concrete — the material that Le Corbusier celebrated for its honesty. To expose the structure was to tell the truth about it. In an era of postwar reconstruction, that truth felt radical. Today, returning to these buildings, it feels necessary.' },
      { type: 'paragraph', text: 'What the best Brutalist structures understand is that silence is not the absence of sound — it is the presence of weight. A concrete wall does not merely block noise; it absorbs it. Walking into the National Theatre in London or the Barbican Centre is to feel architecture push back against the city, create a membrane between the social world and the contemplative one.' },
      { type: 'quote', text: 'Architecture should speak of its time and place, but yearn for timelessness.', author: 'Frank Gehry' },
      { type: 'heading', text: 'Negative Space as Design Intention' },
      { type: 'paragraph', text: 'The Brutalist vocabulary of overhangs, recesses, and monolithic voids is frequently misread as indifference to human scale. The opposite is true. These spaces are precisely calibrated to produce a specific psychological effect: the sense of being held by something larger than yourself. The courtyard is not empty — it is charged.' },
      { type: 'subheading', text: 'Buildings Worth Studying' },
      { type: 'list', items: [
        'Barbican Estate, London — community at civic scale',
        'Salk Institute, La Jolla — the courtyard as meditation',
        'National Assembly Building, Dhaka — Kahn\'s most complete vision',
        'Unité d\'Habitation, Marseille — the city as a single structure',
      ]},
      { type: 'paragraph', text: 'To preserve Brutalist buildings is not nostalgia. It is an argument about what architecture owes its inhabitants: not spectacle, but shelter — not from the weather, but from the relentless velocity of modern life.' },
    ],
  },
];
