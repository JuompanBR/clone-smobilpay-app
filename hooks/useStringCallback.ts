import { useCallback, useState } from "react";

const useStringCallback = (parentSetterMethod: (data: string) => void) => {
  const [value, setValue] = useState<string>();

  const callback = useCallback((data: string) => {
    parentSetterMethod(data);
    setValue(data);
    
  }, [parentSetterMethod]);

  return [value, callback] as const;
};

export default useStringCallback;