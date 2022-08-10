import { useEffect, useState } from "react";

const useService=()=>{
    const [services, setService] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [services]);
  return [services]
}
export default useService;