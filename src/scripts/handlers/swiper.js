import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination,
    SwiperPluginNavigation,
} from 'tiny-swiper';

Swiper.use([
    SwiperPluginLazyload,
    SwiperPluginPagination,
    SwiperPluginNavigation
]);

export { Swiper };
