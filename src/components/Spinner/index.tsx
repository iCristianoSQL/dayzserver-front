import * as S from "./styles"

export const MySpinner = () => {
  return (
    <S.SpinnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Spinner />
    </S.SpinnerContainer>
  );
};
