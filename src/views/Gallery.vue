<template>
  <div id="gallery" class="gallery" ref="gallery"></div>
</template>
<script>
export default {
  name: 'gallery',
  data() {
    return {
      jgallery: undefined,
      images: [{
        title: 'Images',
        items: [
          {
            url: 'images/gallery/IMG_1160.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1160.jpg',
            title: '',
            hash: 'photo-1',
          },
          {
            url: 'images/gallery/IMG_1161.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1161.jpg',
            title: '',
            hash: 'photo-2',
          },
          {
            url: 'images/gallery/IMG_1162.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1162.jpg',
            title: '',
            hash: 'photo-3',
          },
          {
            url: 'images/gallery/IMG_1163.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1163.jpg',
            title: '',
            hash: 'photo-4',
          },
          {
            url: 'images/gallery/IMG_1165.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1165.jpg',
            title: '',
            hash: 'photo-5',
          },
          {
            url: 'images/gallery/IMG_1166.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1166.jpg',
            title: '',
            hash: 'photo-6',
          },
          {
            url: 'images/gallery/IMG_1167.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1167.jpg',
            title: '',
            hash: 'photo-7',
          },
          {
            url: 'images/gallery/IMG_1168.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1168.jpg',
            title: '',
            hash: 'photo-8',
          },
          {
            url: 'images/gallery/IMG_1169.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1169.jpg',
            title: '',
            hash: 'photo-9',
          },
          {
            url: 'images/gallery/IMG_1170.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1170.jpg',
            title: '',
            hash: 'photo-10',
          },
          {
            url: 'images/gallery/IMG_1171.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1171.jpg',
            title: '',
            hash: 'photo-11',
          },
          {
            url: 'images/gallery/IMG_1172.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1172.jpg',
            title: '',
            hash: 'photo-12',
          },
          {
            url: 'images/gallery/IMG_1173.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1173.jpg',
            title: '',
            hash: 'photo-13',
          },
          {
            url: 'images/gallery/IMG_1174.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1174.jpg',
            title: '',
            hash: 'photo-14',
          },
          {
            url: 'images/gallery/IMG_1175.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1175.jpg',
            title: '',
            hash: 'photo-15',
          },
          {
            url: 'images/gallery/IMG_1176.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1176.jpg',
            title: '',
            hash: 'photo-16',
          },
          {
            url: 'images/gallery/IMG_1177.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1177.jpg',
            title: '',
            hash: 'photo-17',
          },
          {
            url: 'images/gallery/IMG_1178.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1178.jpg',
            title: '',
            hash: 'photo-18',
          },
          {
            url: 'images/gallery/IMG_1178.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1178.jpg',
            title: '',
            hash: 'photo-19',
          },
          {
            url: 'images/gallery/IMG_1180.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1180.jpg',
            title: '',
            hash: 'photo-20',
          },
          {
            url: 'images/gallery/IMG_1181.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1181.jpg',
            title: '',
            hash: 'photo-21',
          },
          {
            url: 'images/gallery/IMG_1182.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1182.jpg',
            title: '',
            hash: 'photo-22',
          },
          {
            url: 'images/gallery/IMG_1183.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1183.jpg',
            title: '',
            hash: 'photo-23',
          },
          {
            url: 'images/gallery/IMG_1184.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1184.jpg',
            title: '',
            hash: 'photo-24',
          },
          {
            url: 'images/gallery/IMG_1185.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1185.jpg',
            title: '',
            hash: 'photo-25',
          },
          {
            url: 'images/gallery/IMG_1186.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1186.jpg',
            title: '',
            hash: 'photo-26',
          },
          {
            url: 'images/gallery/IMG_1191.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1191.jpg',
            title: '',
            hash: 'photo-27',
          },
          {
            url: 'images/gallery/IMG_1195.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1195.jpg',
            title: '',
            hash: 'photo-28',
          },
          {
            url: 'images/gallery/IMG_1196.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1196.jpg',
            title: '',
            hash: 'photo-29',
          },
          {
            url: 'images/gallery/IMG_1197.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1197.jpg',
            title: '',
            hash: 'photo-30',
          },
          {
            url: 'images/gallery/IMG_1198.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1198.jpg',
            title: '',
            hash: 'photo-31',
          },
          {
            url: 'images/gallery/IMG_1199.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1199.jpg',
            title: '',
            hash: 'photo-32',
          },
          {
            url: 'images/gallery/IMG_1200.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1200.jpg',
            title: '',
            hash: 'photo-33',
          },
          {
            url: 'images/gallery/IMG_1201.jpg',
            thumbUrl: 'images/gallery/thumb/IMG_1201.jpg',
            title: '',
            hash: 'photo-34',
          },
        ],
      }],
    };
  },
  mounted() {
    this.jgallery = window.JGallery.create(this.images, { previewSize: 'contain', slideShowAutoStart: true, browserHistory: false });
    this.$refs.gallery
      .appendChild(this.jgallery.getElement());
  },
  beforeDestroy() {
    this.jgallery.pauseSlideShowIcon.click();
  },
};
</script>
