import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesLists = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
      'articlesPage/fetchArticlesLists',
      async (_, thunkApi) => {
          const { extra, rejectWithValue } = thunkApi;

          try {
              const response = await extra.api.get<Article[]>('/articles', {
                  params: {
                      _expand: 'user',
                  },
              });

              if (!response.data) {
                  throw new Error();
              }

              return response.data;
          } catch (error) {
              return rejectWithValue('error');
          }
      },
  );
