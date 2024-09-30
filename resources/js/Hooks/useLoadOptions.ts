import Category from "@/Interfaces/Category";
import File from "@/Interfaces/File";
import InternalCategory from "@/Interfaces/InternalCategory";
import Keyword from "@/Interfaces/Keyword";
import KeywordGroup from "@/Interfaces/KeywordGroup";
import PaginatedData from "@/Interfaces/PaginatedData";
import { useLazyGetCategoriesQuery } from "@/Services/categories";
import { useLazyGetFilesQuery } from "@/Services/files";
import { useLazyGetInternalCategoriesQuery } from "@/Services/internalCategories";
import {
    useLazyGetKeywordGroupsQuery,
    useLazyGetKeywordsQuery,
} from "@/Services/keywords";
import { GroupBase, OptionsOrGroups } from "react-select";

type IProps =
    | {
          onCallback?: (name: string, response: PaginatedData<any>) => void;
      }
    | undefined;

const useLoadOptions = ({ onCallback }: IProps = {}) => {
    const [getCategoriesLazy] =
        useLazyGetCategoriesQuery<PaginatedData<Category>>();
    const [getFilesLazy] = useLazyGetFilesQuery<PaginatedData<File>>();
    const [getInternalCategoriesLazy] =
        useLazyGetInternalCategoriesQuery<PaginatedData<InternalCategory>>();
    const [getKeywordsLazy] = useLazyGetKeywordsQuery<PaginatedData<Keyword>>();
    const [getKeywordGroupsLazy] =
        useLazyGetKeywordGroupsQuery<PaginatedData<KeywordGroup>>();

    const loadCategoriesLazy = async (
        search: string,
        _: OptionsOrGroups<Category, GroupBase<Category>>,
        filters?: { page: number }
    ) => {
        const response = await getCategoriesLazy({
            search,
            ...filters,
        }).unwrap();
        onCallback?.("loadCategoriesLazy", response);
        return {
            options: response.data,
            hasMore: response.meta.current_page !== response.meta.last_page,
            additional: {
                page: response.meta.current_page + 1,
            },
        };
    };

    const loadInternalCategoriesLazy = async (
        search: string,
        _: OptionsOrGroups<InternalCategory, GroupBase<InternalCategory>>,
        filters?: { page: number }
    ) => {
        const response = await getInternalCategoriesLazy({
            search,
            ...filters,
        }).unwrap();
        onCallback?.("loadInternalCategoriesLazy", response);
        return {
            options: response.data,
            hasMore: response.meta.current_page !== response.meta.last_page,
            additional: {
                page: response.meta.current_page + 1,
            },
        };
    };

    const loadKeywordsLazy = async (
        search: string,
        _: OptionsOrGroups<Keyword, GroupBase<Keyword>>,
        filters?: { page: number }
    ) => {
        const response = await getKeywordsLazy({
            search,
            ...filters,
        }).unwrap();
        onCallback?.("loadKeywordsLazy", response);
        return {
            options: response.data,
            hasMore: response.meta.current_page !== response.meta.last_page,
            additional: {
                page: response.meta.current_page + 1,
            },
        };
    };

    const loadKeywordGroupsLazy = async (
        search: string,
        _: OptionsOrGroups<KeywordGroup, GroupBase<KeywordGroup>>,
        filters?: { page: number }
    ) => {
        const response = await getKeywordGroupsLazy({
            search,
            ...filters,
        }).unwrap();
        onCallback?.("loadKeywordGroupsLazy", response);
        return {
            options: response.data,
            hasMore: response.meta.current_page !== response.meta.last_page,
            additional: {
                page: response.meta.current_page + 1,
            },
        };
    };

    const loadFilesLazy = async (
        search: string,
        _: OptionsOrGroups<File, GroupBase<File>>,
        filters?: { page: number }
    ) => {
        const response = await getFilesLazy({
            search,
            ...filters,
        }).unwrap();
        onCallback?.("loadFilesLazy", response);
        return {
            options: response.data,
            hasMore: response.meta.current_page !== response.meta.last_page,
            additional: {
                page: response.meta.current_page + 1,
            },
        };
    };

    return {
        loadCategoriesLazy,
        loadFilesLazy,
        loadInternalCategoriesLazy,
        loadKeywordsLazy,
        loadKeywordGroupsLazy,
    };
};

export default useLoadOptions;
