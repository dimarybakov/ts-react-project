import { Article } from './article';

export interface articleDetailsSchema {
  data?: Article;
  isLoading: boolean;
  error?: string;
}
