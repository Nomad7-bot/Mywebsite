// src/data/articles.ts
export interface Article {
  id: string;
  category: 'Tech' | 'Eat' | 'Lifestyle' | 'Etc' | 'Design' | 'Architecture';
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
}

export const articles: Article[] = [
  {
    id: 'ritual-morning-pourover',
    category: 'Eat',
    date: 'Oct 24, 2024',
    title: 'The Ritual of Morning Pour-Over.',
    summary: 'Finding clarity in the slow process of artisanal coffee brewing. A meditation on heat, timing, and sensory focus that transforms a morning routine into a sacred daily ritual.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFTbrD1sAUjNB8DRy-DpGEo9g_kEb7MQKTnCIA-WoyxACAJm9mYONZ-7JGZKXFrviZ6qCuVNoNKZ_iS8WxyKC81Qqh-PBTNnHgAp33UkLT7BcF2O6H7b7gLGEKPn5SPbZsXFNUFK6YH8TU-7JX4kMefO0wxEKQAY6QsWjYcTjluP2gOzRAB6n3srKxqAvTZHzg6pxSe4R0n0gLXKxJRI76uepmDrSawP0i_WRkIcUKKCwTgzNgZ3t3vww4gOtGHKz_2BlJzkYgxQ',
    imageAlt: 'close-up of ceramic coffee dripper'
  },
  {
    id: 'design-tools-next-decade',
    category: 'Tech',
    date: 'Oct 20, 2024',
    title: 'Design Tools for the Next Decade.',
    summary: 'Why the future of software feels more tactile and organic than ever before.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Jhq3Dh1yqGJ7Ryl-1yS6hktsHA8SZztanp-cjhlse-gDoMkHzBdotpfIqUf9W5z_lvOkuA1gD2RMV_-SK_p0ZtAdWWfur3JiqDvh07b4sOdQ-jthP-57Hjl3DUKPPtVDst1SfeBUtVFgm7ryv0oUXIPwruiduq_f42IVIzjy4PCNc7iRYq7wu-TMUt7k9g4SwuGc2qwHAcKYBUI6r8KUV_y_NdGcZQVQgjXM6qtKzgiClhUp_Bg-lRR1w-3ejXgZh05CBlZrcw',
    imageAlt: 'ultra-thin modern laptop on a light oak table'
  },
  {
    id: 'warmth-linen-oak',
    category: 'Lifestyle',
    date: 'Oct 15, 2024',
    title: 'The Warmth of Linen and Oak.',
    summary: 'A guide to selecting home materials that age with grace and character.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJHOcT7VloN_JpzXDrhVMRaq89s4AB18F1mVpjnPPl08k6eiSUwp-OtOiFCbJeDHIoTEbNufNxJcpQ9qWdiWkNnpOXVoIaC0SJhiIUZU43xGdco_XLzfdCkoBnyufOSSBgT1xDMa7YOXpSL-JpeiepWzaVpqvM7O5YHqd10G_Ge2hicFrp7_qSSxjGXreWatYCRhmD-NmEcYHnOTumJXOlJVLeamcMfE3yCpYzJfQPtEfp5d28zCxDsbY_NXwPrAddjbln-4AQ',
    imageAlt: 'elegant linen sofa with neutral toned pillows'
  },
  {
    id: 'philosophy-clean-code',
    category: 'Etc',
    date: 'Oct 12, 2024',
    title: 'The Philosophy of Clean Code.',
    summary: 'How writing code is remarkably similar to editing a literary essay.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJHBvewCjdv3S-PwkMohI5dy-Srwv1LliS9tCH1CY0eodM_YpEytyFPHEtAK9INQkk0m0hrC3-DqBOPlva6_uhIJ1EaVDh6CN-7juVH5Q7GPHXRztDbl7AOEQBfym2SxwEf-oRa6kjJKEL7NSYuUaSCvNVBmYRe4cItwk_E967oJ-HJVmUwhimFsCsseihcn_QTdluFQGP2bCP8GYCBR8nMIKgMcGHNfb59dI9H9Qs7BykKf6PUayeGAJFjLO1GqWR7cDa3fwWGw',
    imageAlt: 'dark code editor screen'
  },
  {
    id: 'geometry-of-silence',
    category: 'Architecture',
    date: 'Nov 02, 2024',
    title: 'The Geometry of Silence.',
    summary: 'A study of how Brutalist structures use raw materiality to create spaces of profound quietude and reflection in dense urban environments.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALtHKmyDYnBntY7epoNuWmJD08T0oGkFOq1avlOgXR7fRXdh2DguyjcURq0FPsGJdDFz4HT-YVHdodJZ8gcz43cukfD_MNQCcMkMf_ORzHnF2JSxqPgmLdu3ji_d54xd92PcRKmEcpGldMvHfJ2TcYJpTYnquoiAh82mYaaFHqHiiVvq-GwumZFA5GFYN41DeznF_KWMCRTbCGYKUbKkKMLmUjbFkxjwY0fpgsd0aM2RlI07hHD9cwicpufWtOFwxpb1YsXdMljA',
    imageAlt: 'brutalist architecture building'
  }
];
