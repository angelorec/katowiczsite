import type { Post } from '@/lib/types';

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

const newVideos: Post[] = [
  {
    id: 'video-1',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/F3ARUKrA#2J9IeOQ6bUDC02w3p4mCLvutXiEz9vs05PvB-NxRwzE!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Meu Deus, não sei se assisto ou me escondo 💀' },
      { user: 'andre_b', text: 'Tá impossível de resistir… 😈' },
      { user: 'thiago_r', text: 'Quem aguenta tanta tentação assim? 🥶' }
    ]
  },
  {
    id: 'video-2',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/M643CITS#Glb3la8gaZSeC18BKJz9NA71V1lFAB3OZU6mbp7npio!1a',
    caption: '🔥 Fazendo todo mundo suar 😈',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'vinicius_p', text: 'Isso aqui devia ser proibido 😵‍💫' },
      { user: 'gabriel_c', text: 'Tô precisando de gelo pra sobreviver 🥶' },
      { user: 'renato_b', text: 'Que vídeo é esse? Tô transtornado 😈' }
    ]
  },
  {
    id: 'video-3',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/cqoCiBRB#IakhHa3RQvj_KAsddNLLkGv7nbZalsa5nH8wh1b1UI8!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'otavio_n', text: 'Tô hipnotizado, ajuda 😈' },
      { user: 'ricardo_f', text: 'Alguém segura meu coração 💀' },
      { user: 'leonardo_d', text: 'Isso aqui é arma de destruição em massa 🥶' }
    ]
  },
  {
    id: 'video-4',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/J3xACSwb#UVXBnBSTJKE_uyrXhsdyGmwmY6VdycTaTXrtuG67Ekk!1a',
    caption: '😇 Pareço santa, mas olha só… 😈',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'davi_l', text: 'Que maldade, cê tá brincando com a gente 😵‍💫' },
      { user: 'samuel_r', text: 'Não é justo ser tão provocante 💀' },
      { user: 'heitor_a', text: 'Preciso de resgate, tô queimando 🥵' }
    ]
  },
  {
    id: 'video-5',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/97YBiTIL#lj2lVT8fzk147o5Cp4wwWqVtmjVxyQlEsCyVZRfeq38!1a',
    caption: '🔥 Mexendo com desejos que você nem sabia que tinha 😈',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'arthur_m', text: 'Meu Deus, é quase um pecado assistir 😈' },
      { user: 'bernardo_s', text: 'Tô tremendo aqui 🥶' },
      { user: 'caio_p', text: 'Que vídeo! Vou precisar de reanimação 💀' }
    ]
  },
  {
    id: 'video-6',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/Qq4gQCoJ#QqBehsIYjTISRlmduOvzAMw_4GKZ2EuSdDJmy7uIt6M!1a',
    caption: '🥵 Tentação em movimento',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'enzo_v', text: 'Essa é de parar o coração 😈' },
      { user: 'miguel_g', text: 'Tô me sentindo fraco só de olhar 💀' },
      { user: 'breno_t', text: 'Preciso de proteção, tá pegando fogo 🥵' }
    ]
  },
  {
    id: 'video-7',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/di4XELBa#WjBeLNv0fnOekuvLMdWROmy0gFLb7vSk_kB6FLvmJdY!1a',
    caption: '😈 Provocando até quem jurava que não se impressionava',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'yuri_h', text: 'Não aguento tanta ousadia 😵‍💫' },
      { user: 'iago_z', text: 'Que diabos de vídeo é esse? 🥶' },
      { user: 'nicolas_k', text: 'Meu coração não sobrevive 💀' }
    ]
  },
  {
    id: 'video-8',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/IqhlEAAT#53rRsp8tqZnMC-EpckZnBM1lRS0aGcbJz5K0mUgbsiQ!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'antonio_j', text: 'Tô sofrendo, socorro 🥵' },
      { user: 'erick_w', text: 'Isso deveria vir com aviso de risco 😈' },
      { user: 'fabio_q', text: 'Perigoso demais pra mim 💀' }
    ]
  },
  {
    id: 'video-9',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/5mQAFLrI#O00uRhfwj8JfFFJ4T2Z5x9GZgh7Fh13Wa0ag9AHcvr0!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'levi_x', text: 'Meu Deus, tô sem fôlego 😵‍💫' },
      { user: 'henrique_y', text: 'Essa é de explodir a cabeça 🥶' },
      { user: 'luan_e', text: 'Tô queimando só de assistir 😈' }
    ]
  },
  {
    id: 'video-10',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/IqhlEAAT#53rRsp8tqZnMC-EpckZnBM1lRS0aGcbJz5K0mUgbsiQ!1a',
    caption: '😈 Jogando charme e caos em doses iguais',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'marcos_r', text: 'Sério, que vídeo é esse? 🥶' },
      { user: 'raul_u', text: 'Tô perdido só de olhar 💀' },
      { user: 'sergio_i', text: 'Isso aqui é perigoso demais 😈' }
    ]
  },
  {
    id: 'video-11',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/NrokRT6a#sbTP-6cDjcY6-v9i6s0AX0tFi7ixTt_IQRbzvJro1xw!1a',
    caption: '🥵 Mexendo com desejos proibidos',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'valter_o', text: 'Que maldade, tá brincando com meu coração 😈' },
      { user: 'wagner_a', text: 'Não aguento tanta ousadia 💀' },
      { user: 'igor_s', text: 'Tô tremendo todo aqui 🥶' }
    ]
  },
  {
    id: 'video-12',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/Z35yEADS#ypvXRSLFwMa518YTwIbRfUOdLAx5MvFtFXNCE3KS0F0!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'luiz_f', text: 'Isso é arma de destruição de nervos 😵‍💫' },
      { user: 'paulo_d', text: 'Cuidado, tá pegando fogo 🥵' },
      { user: 'matheus_g', text: 'Tô sem palavras 💀' }
    ]
  },
  {
    id: 'video-13',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/srgzRALT#dIshKINEQCB_mYSlg8ERc1HksisM4NZBdJRDthWncNk!1a',
    caption: '🔥 Fazendo qualquer um perder o controle',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_h', text: 'Que vídeo é esse, meu Deus 😈' },
      { user: 'rafael_j', text: 'Tô precisando de resgate 🥶' },
      { user: 'carlos_k', text: 'Alerta vermelho total 💀' }
    ]
  },
  {
    id: 'video-14',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/RnBzWKRS#koxXbKRItd9PCJRm_FZXhG2HlXD2-El2YiBlkiSpeug!1a',
    caption: '😈 Sedução sem limites',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'lucas_l', text: 'Tô sem ar só de olhar 🥵' },
      { user: 'felipe_z', text: 'Impossível resistir 💀' },
      { user: 'thiago_x', text: 'Perigo, perigo, perigo 😵‍💫' }
    ]
  },
  {
    id: 'video-15',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/N3RWkYrK#yaMfLjXrPe8LpbdhxnqxonJji8beYCRFRU3j7sfsVr4!1a',
    caption: '🥶 O frio na espinha é real',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'andre_c', text: 'Isso aqui é criminoso 😈' },
      { user: 'pedro_v', text: 'Tô tremendo todo 🥵' },
      { user: 'joao_b', text: 'Meu coração não aguenta 💀' }
    ]
  },
  {
    id: 'video-16',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/Rrh1GCKR#LP6VLCYTWzh6rTbUugdb6Wqb2TXND31ieVX06JO6VtY!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'marcelo_n', text: 'Não aguento tanta ousadia 😵‍💫' },
      { user: 'bruno_m', text: 'Socorro, tô derretendo 🥵' },
      { user: 'diogo_q', text: 'Que diabos de vídeo é esse 💀' }
    ]
  },
  {
    id: 'video-17',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/QnIAkTiL#5pLbD1wk8RjMUzgJFS2Scys3lcPlAIxpTrPfxUNU8F0!1a',
    caption: '🔥 Provocando desde o primeiro segundo',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'fernando_w', text: 'Tô hipnotizado 😈' },
      { user: 'gustavo_e', text: 'Perigo, muito perigo 🥶' },
      { user: 'daniel_r', text: 'Meu Deus, tá quente demais 💀' }
    ]
  },
  {
    id: 'video-18',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/ZjAziSpL#Gk8acHaej8sPRkNpEpCmUIgvMcq0bog3HJzYPtovbvo!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'rodrigo_t', text: 'Isso deveria ser proibido 😵‍💫' },
      { user: 'lucas_y', text: 'Tô queimando aqui 🥵' },
      { user: 'felipe_u', text: 'Meu coração quase explodiu 💀' }
    ]
  },
  {
    id: 'video-19',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/l6AXTByI#C5Kbsf74Ybk3c-y1Hs3RhpUm0qGYJi6PntbXd_EcbFk!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'andre_i', text: 'Que diabos é isso? 😈' },
      { user: 'pedro_o', text: 'Não sei se rio ou choro 🥵' },
      { user: 'joao_p', text: 'Tô tremendo todo 💀' }
    ]
  },
  {
    id: 'video-20',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/ZjxkCSRB#Iy8cbd6N5MTbUPlcgyP8_ux2nxYzMJCRMdqeDP3eFFw!1a',
    caption: '😇 Enganosa? Só na aparência 😈',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'marcelo_a', text: 'Meu Deus, tá insano 😈' },
      { user: 'bruno_s', text: 'Tô hipnotizado 🥶' },
      { user: 'diogo_d', text: 'Isso aqui é perigoso demais 💀' }
    ]
  },
  {
    id: 'video-21',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/k3hjWALb#hQ1xjxrECi4eHmzXgmKiWD8FxOyiyhkcBCG7P2e_CrY!1a',
    caption: '',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'fernando_f', text: 'Sério, isso é real? 😈' },
      { user: 'gustavo_g', text: 'Tô sem ar 🥵' },
      { user: 'daniel_h', text: 'Meu coração tá em choque 💀' }
    ]
  }
];


const existingPosts: Post[] = [
  {
    id: 'post-2',
    author: 'Natalia Katowicz',
    avatarUrl: 'https://i.imgur.com/JFb3R8k.jpeg',
    type: 'video',
    mediaUrl: 'https://mega.nz/embed/srgzRALT#dIshKINEQCB_mYSlg8ERc1HksisM4NZBdJRDthWncNk!1a',
    caption: '😈 Cuidado, perigo de calor extremo 🥵',
    likes: Math.floor(Math.random() * 5000) + 200,
    comments: [
      { user: 'pedro_g', text: 'Meu Deus, não sei se assisto ou me escondo 💀' },
      { user: 'andre_b', text: 'Tá impossível de resistir… 😈' },
      { user: 'thiago_r', text: 'Quem aguenta tanta tentação assim? 🥶' },
    ]
  }
];

const posts: Post[] = [...newPosts, ...newVideos, ...existingPosts];


export async function getPosts(): Promise<Post[]> {
  // a simple shuffle
  return posts.sort(() => Math.random() - 0.5);
}
