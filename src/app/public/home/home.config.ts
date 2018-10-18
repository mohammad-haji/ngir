const lazyLoadConfig = {
    animation: 'lazy',
    custome: 'product-slider'
};
export const HOME_CONFIG = {
    sliderConfig: {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        interval: 3000,
        point: {
            visible: true
        },
        load: 2,
        RTL: true,
        touch: true,
        loop: true,
    },
    productsConfig: {
        grid: {xs: 1, sm: 3, md: 3, lg: 4, all: 0},
        speed: 500,
        slide: 4,
        interval: 3000,
        animation: lazyLoadConfig.animation,
        custome: lazyLoadConfig.custome,
        itemWidth: 255,
        itemWidthPer: 255,
        point: {
            visible: false
        },
        load: 2,
        RTL: true,
        touch: true,
        loop: true
    },
    homeSlider: [
        {
            src: './assets/images/camera1.jpg'
        }, {
            src: './assets/images/camera2.jpg'
        }, {
            src: './assets/images/camera3.jpg'
        }, {
            src: './assets/images/camera4.jpg'
        }
    ]
};
