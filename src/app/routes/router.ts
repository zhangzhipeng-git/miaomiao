import Vue from 'vue';
import Router from 'vue-router';
import { MovieRoute } from './movie/movie-route'; // 不是用默认导出，所以要解构
import { CinemaRoute } from './cinema/cinema-route';
import { MineRoute } from './mine/mine-route';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRoute,
    CinemaRoute,
    MineRoute
  ],
});
