import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination,
} from 'tiny-swiper';

Swiper.use([SwiperPluginLazyload, SwiperPluginPagination]);

export { Swiper };
