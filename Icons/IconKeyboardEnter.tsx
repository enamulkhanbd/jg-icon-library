import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconKeyboardEnter = (props: IconBaseProps) => {
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
          d="M20.0527 7.26288C19.5295 7.26288 19.1054 7.68703 19.1054 8.21025V11.0524H6.62851L9.35359 8.31966C9.72184 7.95039 9.72143 7.35264 9.35266 6.98388C8.98354 6.61475 8.38507 6.61475 8.01594 6.98388L3.7072 11.2926C3.31668 11.6831 3.31668 12.3163 3.7072 12.7068L8.01167 17.0113C8.38277 17.3824 8.98477 17.3813 9.35456 17.0089C9.7225 16.6384 9.72145 16.04 9.35219 15.6708L6.62851 12.9471H20.0001C20.5524 12.9471 21.0001 12.4994 21.0001 11.9471V8.21025C21.0001 7.68704 20.5759 7.26288 20.0527 7.26288Z"
        />
      </svg>
    );
  });
};
export default IconKeyboardEnter;