export default function IconSwitch({ props }) {
  const { icons, icon, onSwitch } = props;

  return (
    <img
      src={icons[icon]}
      alt="icon"
      onClick={() => (icon === 0 ? onSwitch(1) : onSwitch(0))}
      className="logo"
    />
  );
}
