import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconArrowPointingDirectionUpLeft = (props: IconBaseProps) => {
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
          d="M17.6571 7.37051C17.6506 6.8483 17.2288 6.42654 16.7066 6.42004L7.07758 6.30006C6.59042 6.29399 6.19395 6.69046 6.20002 7.17762L6.32 16.8067C6.32651 17.3289 6.74826 17.7506 7.27048 17.7571C7.81143 17.7639 8.25168 17.3236 8.24494 16.7827L8.15544 9.60008L16.1581 17.6027C16.5294 17.974 17.1314 17.974 17.5027 17.6027C17.874 17.2314 17.874 16.6294 17.5027 16.2581L9.50004 8.25548L16.6826 8.34498C17.2236 8.35172 17.6638 7.91146 17.6571 7.37051Z"
        />
      </svg>
    );
  });
};
export default IconArrowPointingDirectionUpLeft;