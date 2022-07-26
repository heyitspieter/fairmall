import SavedItems from "src/components/SavedItems/SavedItems";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Recommendations from "src/components/Recommendations/Recommendations";
import { useEffect } from "react";
import { getFavorites } from "src/store/slices/favorites";
import { useDispatch, useSelector } from "react-redux";

export default function saved() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch])

    const { favoritesData } = useSelector((state) => state.favorites);

  return (
    <BaseLayout title="Saved Items - Fairmall">
      <SavedItems favoritesData={favoritesData} />
      <Recommendations title="Recommended Items" />
    </BaseLayout>
  );
}