import PropTypes from 'prop-types';

import { carPropType } from './carPropType';

export const carsPropType = PropTypes.arrayOf(carPropType);
