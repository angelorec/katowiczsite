import type { Post } from '@/lib/types';

const firstPost: Post = {
  id: 'video-bunny-1',
  author: 'Natalia Katowicz',
  avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
  type: 'video',
  mediaUrl: 'https://iframe.mediadelivery.net/play/489405/94bdea73-2211-4200-849c-fc22e04e4cbc',
  caption: '',
  likes: Math.floor(Math.random() * 5000) + 200,
  comments: [
    { user: 'pedro_g', text: 'Meu Deus, não sei se assisto ou me escondo 💀' },
    { user: 'andre_b', text: 'Tá impossível de resistir… 😈' },
    { user: 'thiago_r', text: 'Quem aguenta tanta tentação assim? 🥶' }
  ]
};

const newPosts: Post[] = [
  {
    id: 'post-new-1',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/Rlu7XC4.jpeg',
    caption: '💦 Que calor, hein? 🔥',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Meu Deus, não tô preparado pra isso 😳💦' },
      { user: 'lucas_s', text: 'Assim você mata qualquer um de tanto desejo 😏🍑' },
      { user: 'felipe_p', text: 'Gente, para de ser tão gostosa, dá um descanso! 😍🤤' },
    ]
  },
  {
    id: 'post-new-2',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/Acpgo7t.jpeg',
    caption: '🍑 Fazendo qualquer dia comum virar 🔥',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Preciso de gelo pra olhar essa foto 😋❄️' },
      { user: 'andre_b', text: 'Essa foto devia vir com aviso de perigo 😲💦' },
      { user: 'thiago_r', text: 'Quem é você e por que tá quebrando meu cérebro assim? 😍💫' },
    ]
  },
  {
    id: 'post-new-3',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/F40Pxmt.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Não sabia que perfeição vinha com efeito colateral 🤤💛' },
      { user: 'carlos_v', text: 'Se isso é só uma foto, quero ver ao vivo 😋💦' },
      { user: 'marcelo_f', text: 'Alerta: beleza letal detectada! 😳🔥' },
    ]
  },
  {
    id: 'post-new-4',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/kBnZaXO.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Pior que você sabe o que tá fazendo… 😏🍑' },
      { user: 'rafael_p', text: 'Cada curva sua merece aplausos 👏💫' },
      { user: 'diogo_s', text: 'Tô me sentindo mal, mas não consigo parar de olhar 🤩💦' },
    ]
  },
  {
    id: 'post-new-5',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/amRf3qR.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'gustavo_l', text: 'Alguém chama os bombeiros que tá pegando fogo 🔥😳' },
      { user: 'fernando_m', text: 'Gente, cê não é humana, é obra de arte 🤤💜' },
      { user: 'daniel_a', text: 'É sério isso ou tô sonhando? 😏✨' },
    ]
  },
  {
    id: 'post-new-6',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/AQUERlr.jpeg',
    caption: '💫',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Tô preso nesse olhar e não quero sair 😲💛' },
      { user: 'lucas_s', text: 'Se olhar matasse, eu já era 🤤🖤' },
      { user: 'felipe_p', text: 'Só pra constar: você tá proibida de ser tão sexy assim 😏💦' },
    ]
  },
  {
    id: 'post-new-7',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/ufw1Kl5.jpeg',
    caption: '🍑',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Cada ângulo seu é um ataque ao coração 😍💓' },
      { user: 'andre_b', text: 'Tá impossível de resistir 😏🔥' },
      { user: 'thiago_r', text: 'Preciso de uma receita pra não babar 🤤💛' },
    ]
  },
  {
    id: 'post-new-8',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/8nYWbuh.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Essa foto devia vir com aviso “perigo de crush instantâneo” 😲💦' },
      { user: 'carlos_v', text: 'Que mulher é essa, minha gente? 😏❤️' },
      { user: 'marcelo_f', text: 'Tá me deixando sem ar 😍✨' },
    ]
  },
  {
    id: 'post-new-9',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/ZNZUL3D.jpeg',
    caption: '🌟 Brilhando até no escuro',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Olha essa perfeição, meu Deus 🤩💦' },
      { user: 'rafael_p', text: 'Eu não aguento tanta beleza 😳💛' },
      { user: 'diogo_s', text: 'Maravilhosa demais, sério! 😍🔥' },
    ]
  },
  {
    id: 'post-new-10',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/vKYZj13.jpeg',
    caption: '🍑 Tentação nível máximo 😏💦',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'gustavo_l', text: 'Tô sofrendo só de olhar 😋💛' },
      { user: 'fernando_m', text: 'Dá licença que preciso me recompor 😲🔥' },
      { user: 'daniel_a', text: 'Quem te inventou, que genialidade 🤤💖' },
    ]
  },
  {
    id: 'post-new-11',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/lgQbAQa.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Cuidado, coração fraco não resiste 😳💦' },
      { user: 'lucas_s', text: 'Você devia ser proibida 🤩🔥' },
      { user: 'felipe_p', text: 'Inacreditável como consegue ser perfeita assim 😍💜' },
    ]
  },
  {
    id: 'post-new-13',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/a3vSOo0.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Quero ver isso de perto 😋💦' },
      { user: 'andre_b', text: 'Sério, como você consegue? 😏💛' },
      { user: 'thiago_r', text: 'Preciso de um minuto pra respirar 😲❤️' },
    ]
  },
   {
    id: 'post-new-14',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/a3vSOo0.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Maravilhosa demais, impossível não admirar 😍💫' },
      { user: 'carlos_v', text: 'Cada foto sua é uma obra-prima 🤤💦' },
      { user: 'marcelo_f', text: 'Tá me deixando sem palavras 😏💜' },
    ]
  },
  {
    id: 'post-new-15',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/UJpnS73.jpeg',
    caption: '💦 Pura tentação 😋🔥',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Quem é essa deusa? 😳💛' },
      { user: 'rafael_p', text: 'Preciso de gelo, tá quente demais 🔥😏' },
      { user: 'diogo_s', text: 'Vou ficar sonhando com essa foto 😍💫' },
    ]
  },
  {
    id: 'post-new-16',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/DueEZal.jpeg',
    caption: '✨ Olhar que não mente 😏💖',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'gustavo_l', text: 'Me pegou desprevenido 😲💦' },
      { user: 'fernando_m', text: 'Sério, isso é real ou photoshop? 😋💛' },
      { user: 'daniel_a', text: 'Preciso de mais fotos assim 😍🔥' },
    ]
  },
  {
    id: 'post-new-17',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/NIyl95M.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Não consigo resistir 😏💦' },
      { user: 'lucas_s', text: 'Que perfeição de mulher 😍❤️' },
      { user: 'felipe_p', text: 'Tô quase explodindo aqui 🤤💛' },
    ]
  },
  {
    id: 'post-new-18',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/WmWEprU.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Meu Deus, não é justo ser tão perfeita 😳💦' },
      { user: 'andre_b', text: 'Preciso de ar depois de olhar 😏💛' },
      { user: 'thiago_r', text: 'Inacreditável, sério 😍🔥' },
    ]
  },
  {
    id: 'post-new-19',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/adaj3vV.jpeg',
    caption: '💫 Olhar que prende 👀💖',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Tô hipnotizado 🤤💦' },
      { user: 'carlos_v', text: 'Que mulher é essa? 😏❤️' },
      { user: 'marcelo_f', text: 'Preciso de mais fotos, por favor 😍💛' },
    ]
  },
  {
    id: 'post-new-20',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/JhQUu0Q.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Cada foto tua é um crime 😳🔥' },
      { user: 'rafael_p', text: 'Preciso de socorro, tô derretendo 😏💦' },
      { user: 'diogo_s', text: 'Inacreditável como consegue 😍💖' },
    ]
  },
  {
    id: 'post-new-21',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/ktCUCmB.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'gustavo_l', text: 'Meu Deus, tá demais 😏💦' },
      { user: 'fernando_m', text: 'Assim você me mata 😍💛' },
      { user: 'daniel_a', text: 'Quase não resisto 😳🔥' },
    ]
  },
  {
    id: 'post-new-22',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/4gvXOYm.jpeg',
    caption: '✨ Tentação que não pede licença 😏💖',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Cuidado, tá pegando fogo 🔥💦' },
      { user: 'lucas_s', text: 'Não aguento tanta perfeição 😍💜' },
      { user: 'felipe_p', text: 'Quero mais, por favor 😋💛' },
    ]
  },
  {
    id: 'post-new-23',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/YUM0a8I.jpeg',
    caption: '💦 Curvas que hipnotizam ✨🍑',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Tô sem ar aqui 😳💛' },
      { user: 'andre_b', text: 'Que mulher é essa? 😏🔥' },
      { user: 'thiago_r', text: 'Preciso me recompor 😍💖' },
    ]
  },
  {
    id: 'post-new-24',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/CXe3QC6.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Meu coração não aguenta 😏💦' },
      { user: 'carlos_v', text: 'Cada foto sua é demais 😍💛' },
      { user: 'marcelo_f', text: 'Tô em choque aqui 😳✨' },
    ]
  },
  {
    id: 'post-new-25',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/JvTKjCM.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Sério, isso não é justo 😏💦' },
      { user: 'rafael_p', text: 'Preciso de mais fotos 😍💛' },
      { user: 'diogo_s', text: 'Tô hipnotizado 😳💜' },
    ]
  },
  {
    id: 'post-new-26',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/kLqDmgd.jpeg',
    caption: '🍑 Pura tentação 😋💫',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'gustavo_l', text: 'Tá me deixando sem palavras 😏💦' },
      { user: 'fernando_m', text: 'Que perfeição, meu Deus 😍💛' },
      { user: 'daniel_a', text: 'Preciso respirar depois dessa 😳🔥' },
    ]
  },
  {
    id: 'post-new-27',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/k8rKImY.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_m', text: 'Cada foto tua me mata 😏💦' },
      { user: 'lucas_s', text: 'Não é humano ser tão linda 😍💛' },
      { user: 'felipe_p', text: 'Alguém segura meu coração 😳💜' },
    ]
  },
  {
    id: 'post-new-28',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/8ccSVF6.jpeg',
    caption: '💦 Tentação nível expert 😋🔥',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Meu Deus, não é justo 😏💛' },
      { user: 'andre_b', text: 'Quero mais fotos assim 😍💫' },
      { user: 'thiago_r', text: 'Tô sem ar 😳💖' },
    ]
  },
  {
    id: 'post-new-29',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/z6xy1ik.jpeg',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'joao_c', text: 'Tô preso nesse olhar 😏💦' },
      { user: 'carlos_v', text: 'Que mulher é essa? 😍💛' },
      { user: 'marcelo_f', text: 'Não consigo parar de olhar 😳🔥' },
    ]
  },
  {
    id: 'post-new-30',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'image',
    mediaUrl: 'https://i.imgur.com/4AusGFM.jpeg',
    caption: '💫 Cada curva, um desejo 😋💖',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'bruno_a', text: 'Meu Deus, tá demais 😏💦' },
      { user: 'rafael_p', text: 'Preciso de mais fotos 😍💛' },
      { user: 'diogo_s', text: 'Inacreditável 😳✨' },
    ]
  }
];




const posts: Post[] = [firstPost, ...newPosts];


export async function getPosts(): Promise<Post[]> {
  // a simple shuffle
  return posts.sort(() => Math.random() - 0.5);
}
