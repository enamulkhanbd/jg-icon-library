import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconArrowPointingDirectionUpRight = (props: IconBaseProps) => {
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
          d="M6.32398 7.37051C6.33048 6.8483 6.75224 6.42654 7.27446 6.42004L16.9035 6.30006C17.3907 6.29399 17.7871 6.69046 17.7811 7.17762L17.6611 16.8067C17.6546 17.3289 17.2328 17.7506 16.7106 17.7571C16.1697 17.7639 15.7294 17.3236 15.7361 16.7827L15.8256 9.60008L7.82302 17.6027C7.45172 17.974 6.84973 17.974 6.47843 17.6027C6.10713 17.2314 6.10713 16.6294 6.47843 16.2581L14.481 8.25548L7.29844 8.34498C6.75749 8.35172 6.31724 7.91146 6.32398 7.37051Z"
        />
      </svg>
    );
  });
};
export default IconArrowPointingDirectionUpRight;