import Game from 'Pages/game';
import Luck from 'Pages/luck';
import Video from 'Pages/video';
import Home from 'Pages/home';

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/luck',
    name: 'luck',
    component: Luck
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  }
];
