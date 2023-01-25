import create from "zustand";
import {devtools} from "zustand/middleware"

const useCollegeDataStore = create(
    devtools((set) => ({
        collegeDataList: [],
        setCollegeDataList:(collegeData)=>{
            set((state) => ({
                collegeDataList: [...collegeData,...state.collegeDataList]
            }))
        }
    }))
)

export default useCollegeDataStore
