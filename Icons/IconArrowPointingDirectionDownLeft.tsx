import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconArrowPointingDirectionDownLeft = (props: IconBaseProps) => {
  return WithIconProps(props, ({ width, height, fill, className }) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={fill || "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6571 16.8106C17.6506 17.3329 17.2288 17.7546 16.7066 17.7611L7.07758 17.8811C6.59042 17.8872 6.19395 17.4907 6.20002 17.0035L6.32 7.37449C6.32651 6.85228 6.74826 6.43052 7.27048 6.42401C7.81143 6.41727 8.25168 6.85753 8.24494 7.39848L8.15544 14.5811L16.1581 6.57846C16.5294 6.20716 17.1314 6.20716 17.5027 6.57846C17.874 6.94976 17.874 7.55176 17.5027 7.92306L9.50004 15.9257L16.6826 15.8362C17.2236 15.8294 17.6638 16.2697 17.6571 16.8106Z"
        />
      </svg>
    );
  });
};
export default IconArrowPointingDirectionDownLeft;