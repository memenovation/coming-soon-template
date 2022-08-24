const imgURL =
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&w=1024&q=50";

export const Banner = () => {
  return (
    <img
      className="mx-auto max-w-full w-full h-36 object-cover rounded-md "
      src={process.env.NEXT_PUBLIC_BANNER_IMG_URL || imgURL}
    />
  );
};
