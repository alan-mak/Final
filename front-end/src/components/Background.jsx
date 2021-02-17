import './Background.scss';

export default function Background(props) {
  return (
    <div id='background'>
      <div id='color-overlay'>{props.body}</div>
    </div>
  );
}
