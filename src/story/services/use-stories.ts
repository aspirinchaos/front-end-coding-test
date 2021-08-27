import { useEffect, useState } from 'react';

import { Story } from 'story/services/declarations';
import fetchStories from 'story/services/fetch-stories';

const useStories = (): Story[] => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStories();
      setStories(data);
    };

    fetchData();
  }, []);

  return stories;
};

export default useStories;
