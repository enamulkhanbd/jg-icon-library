import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconArrowPointingDirectionDownRight = (props: IconBaseProps) => {
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
          d="M6.32398 16.8106C6.33048 17.3329 6.75224 17.7546 7.27446 17.7611L16.9035 17.8811C17.3907 17.8872 17.7871 17.4907 17.7811 17.0035L17.6611 7.37449C17.6546 6.85228 17.2328 6.43052 16.7106 6.42401C16.1697 6.41727 15.7294 6.85753 15.7361 7.39848L15.8256 14.5811L7.82302 6.57846C7.45172 6.20716 6.84973 6.20716 6.47843 6.57846C6.10713 6.94976 6.10713 7.55176 6.47843 7.92306L14.481 15.9257L7.29844 15.8362C6.75749 15.8294 6.31724 16.2697 6.32398 16.8106Z"
        />
      </svg>
    );
  });
};
export default IconArrowPointingDirectionDownRight;