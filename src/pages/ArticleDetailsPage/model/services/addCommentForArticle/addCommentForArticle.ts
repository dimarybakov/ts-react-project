import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Comment } from 'entities/Comment';

import { getUserAuthData } from 'entities/User';

import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
// import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
// import { addCommentFormActions } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

enum LoginErrors {}

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());

  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article?.id,
      userId: userData?.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(article?.id)); // либо просто добавить в state новый коммент

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
