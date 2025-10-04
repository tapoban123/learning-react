function ButtonGroup({
  onGreenClick,
  onPurpleClick,
  onOliveClick,
  onCyanClick,
  onBlueClick,
}) {
  const buttonClassName =
    "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white";
  return (
    <>
      <div
        className="inline-flex rounded-md shadow-xs gap-3 px-2 py-2 bg-white"
        role="group"
      >
        <button
          type="button"
          className={buttonClassName}
          onClick={onGreenClick}
        >
          Green
        </button>
        <button type="button" className={buttonClassName} onClick={onBlueClick}>
          Blue
        </button>
        <button
          type="button"
          className={buttonClassName}
          onClick={onPurpleClick}
        >
          Purple
        </button>
        <button
          type="button"
          className={buttonClassName}
          onClick={onOliveClick}
        >
          Olive
        </button>
        <button type="button" className={buttonClassName} onClick={onCyanClick}>
          Cyan
        </button>
      </div>
    </>
  );
}

export default ButtonGroup;
