import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination,
    SwiperPluginNavigation,
    SwiperPluginKeyboardControl,
} from 'tiny-swiper';

Swiper.use([
    SwiperPluginLazyload,
    SwiperPluginPagination,
    SwiperPluginNavigation,
    SwiperPluginKeyboardControl,
]);

export { Swiper };
