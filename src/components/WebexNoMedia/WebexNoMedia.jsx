import React from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../helpers';

import Icon from '../generic/Icon/Icon';
import Title from '../generic/Title/Title';
/**
 * Component for displaying a user-friendly message when no user media is present
 *
 * @param {object} props  Data passed to the component
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {object} [props.style]  Custom style to apply
 * @param {string} props.media Media device type
 * @returns {object} JSX of the component
 */

const SCREENS = {
  microphone: {
    icon: 'microphone-issue',
    title: 'Can\'t access microphone',
    /* eslint-disable react/jsx-one-expression-per-line */
    message: (
      <>
        <p>Reload this page and select <b>Allow</b> when your browser asks.</p>
        <p>
          <div><b>Still not working?</b></div>
          You may need to update your webpage permissions.
          Go to your <b>browser settings</b>, look for website settings,
          select <b>Allow for Microphone</b>, then reload this page.
        </p>
      </>
    ),
    /* eslint-enable react/jsx-one-expression-per-line */
  },
  camera: {
    icon: 'camera-issue',
    title: 'Can\'t access camera',
    /* eslint-disable react/jsx-one-expression-per-line */
    message:
    (
      <>
        <p>Reload this page and select <b>Allow</b> when your browser asks.</p>
        <p>
          <div><b>Still not working?</b></div>
          You may need to update your webpage permissions.
          Go to your <b>browser settings</b>, look for website settings,
          select <b>Allow for Camera</b>, then reload this page.
        </p>
      </>
    ),
    /* eslint-enable react/jsx-one-expression-per-line */
  },
};

export default function WebexNoMedia({className, style, media}) {
  const [cssClasses, sc] = webexComponentClasses('no-media', className);
  const screen = SCREENS[media];

  return (
    <div className={cssClasses} style={style}>
      <Icon className={sc('icon-media-issue')} name={screen.icon} />
      <Title className={sc('title')}>{screen.title}</Title>
      <div className={sc('body')}>
        {screen.message}
      </div>
    </div>
  );
}

WebexNoMedia.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
  media: PropTypes.oneOf(['camera', 'microphone']).isRequired,
};

WebexNoMedia.defaultProps = {
  className: undefined,
  style: undefined,
};
