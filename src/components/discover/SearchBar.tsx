
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="bg-white dark:bg-black/20 rounded-lg p-4 max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input 
          type="text"
          placeholder="Search for trails, parks, or locations..."
          className="pl-12 py-6 rounded-lg w-full text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
