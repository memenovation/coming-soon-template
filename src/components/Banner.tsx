const imgURL = "https://images.unsplash.com/photo-1606787366850-de6330128bfc";

export const Banner = () => {
  return (
    <img
      className="mx-auto max-w-full w-full h-36 object-cover rounded-md "
      src={imgURL}
    />
  );
};
