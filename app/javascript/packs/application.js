import 'bootstrap/dist/css/bootstrap.min.css';
import '@icon/open-iconic/open-iconic.css';

import '../styles/application.scss';

import Turbolinks from 'turbolinks';

require('@rails/ujs').start();

require('@rails/activestorage').start();
require('channels');

require.context('../images', true);

Turbolinks.start();
