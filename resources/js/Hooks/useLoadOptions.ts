import Category from "@/Interfaces/Category";
import File from "@/Interfaces/File";
import PaginatedData from "@/Interfaces/PaginatedData";
import { useLazyGetCategoriesQuery } from "@/Services/categories";
import { useLazyGetFilesQuery } from "@/Services/files";
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
    };
};

export default useLoadOptions;
