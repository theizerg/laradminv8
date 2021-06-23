window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('admin-lte');
    window.Pace = require('@dlghq/pace-progress');
    window.toastr = require('toastr');
    toastr.options.preventDuplicates = true;
    require('icheck');
    require('devbridge-autocomplete');
    require('chart.js');
    window.JSZip = require( 'jszip' );
    var pdfMake = require('pdfmake/build/pdfmake.js');
    var pdfFonts = require('pdfmake/build/vfs_fonts.js');
    pdfMake.vfs = pdfFonts.pdfMake.vf
    require('admin-lte/plugins/select2/js/select2.full.min.js');
    require('admin-lte/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js');
    require('admin-lte/plugins/inputmask/jquery.inputmask.min.js');
    require('admin-lte/plugins/daterangepicker/daterangepicker.js');
    require('admin-lte/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js');
    //require('admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js');
    require('admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.min.js');
    require('admin-lte/plugins/summernote/summernote-bs4.min.js');
    require('admin-lte/plugins/jquery-validation/jquery.validate.min.js');
    require('admin-lte/plugins/jquery-validation/additional-methods.min.js');
    require('admin-lte/plugins/ekko-lightbox/ekko-lightbox.js');
    require('admin-lte/plugins/fastclick/fastclick.js');
    require('admin-lte/plugins/ion-rangeslider/js/ion.rangeSlider.js');
    require('admin-lte/plugins/jquery-mousewheel/jquery.mousewheel.js');
    require('admin-lte/plugins/jsgrid/jsgrid.js');
    require('admin-lte/plugins/sweetalert2/sweetalert2.all.js');
    require('admin-lte/plugins/datatables/jquery.dataTables.min.js');
    require('admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js');
    require('admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js');
    require('admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js');
    require('admin-lte/plugins/datatables-buttons/js/dataTables.buttons.min.js');
    require('admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js');
    require('admin-lte/plugins/datatables-buttons/js/buttons.print.min.js');
    require('admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js');
    require('@iconify/iconify');
    require('feather-icons/dist/feather.js');
    require('flot-charts');
    require('morris.js/morris.js');
    require('chartist');
    require('c3-chart/src/c3-chart.js');
    require('sparklines')

  
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
