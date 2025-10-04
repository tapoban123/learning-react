// Put {} when using named props, like, function Card({name, age}){}
// Else just use props like, function Card(props){Use the values like: props.name, and props.age}

function Card({
  url = "https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
  title,
  imgText,
  description = "No description has been provided.",
}) {
  url = "url(" + url + ")";

  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: url,
          }}
          title={imgText}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
