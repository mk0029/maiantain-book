import Link from "next/link";
import React from "react";

const Cta = ({
  children = "Hello World",
  variant = "default",
  type = "button",
  href = "",
  newPage,
  onClick,
  disabled,
  loading,
  loadingTitle = "",
  className = "",
}) => {
  const buttonTypeStyle = {
    disabled: "!cursor-not-allowed !text-black/50 !bg-black/20",
    loading:
      "text-white bg-[linear-gradient(274.42deg,#798FFF_0%,#8EC6FF_124.45%)] cursor-progress",
    default:
      "text-white bg-[linear-gradient(274.42deg,#798FFF_0%,#8EC6FF_124.45%)] hover:opacity-80 hover:shadow-md hover:shadow-black/50 transition-all duration-300 ease-linear",
    outline:
      "!border-[#798FFF] text-[#798FFF] hover:bg-[#798FFF] hover:text-white",
  };
  return href && !loading ? (
    <Link
      href={href}
      scroll={false}
      target={newPage ? "_blank" : "_self"}
      rel="noopener"
      className={`max-w-[335px] w-full border border-solid border-transparent text-center inline-block py-3 rounded-[40px] text-base font-semibold leading-[140%] ${className} ${
        buttonTypeStyle[disabled ? "disabled" : variant]
      } `}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick && !disabled ? onClick : undefined}
      className={`max-w-[335px] w-full border border-solid border-transparent inline-block py-3 rounded-[40px] text-base font-semibold leading-[140%] ${className}  ${
        buttonTypeStyle[disabled ? "disabled" : loading ? "loading" : variant]
      }`}>
      <div className={loading && "flex items-center justify-center gap-2"}>
        {loadingTitle || children}
        {loading && (
          <div class="flex space-x-0.5 justify-center items-center -mb-2.5 -ml-1">
            <div class="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="h-1 w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="h-1 w-1 bg-white rounded-full animate-bounce"></div>
          </div>
        )}
      </div>
    </button>
  );
};

export default Cta;
