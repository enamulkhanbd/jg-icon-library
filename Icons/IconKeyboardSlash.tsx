import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconKeyboardSlash = (props: IconBaseProps) => {
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
          d="M9.48842 20.7583C9.02344 20.625 8.75458 20.14 8.88791 19.675L13.428 3.8417C13.5614 3.37671 14.0464 3.10785 14.5114 3.24119C14.9764 3.37452 15.2452 3.85955 15.1119 4.32453L10.5718 20.1578C10.4384 20.6228 9.95341 20.8917 9.48842 20.7583Z"
        />
      </svg>
    );
  });
};
export default IconKeyboardSlash;