
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadButton = () => {
  return (
    <Button variant="outline" className="flex items-center gap-2" onClick={() => alert("Resume download functionality will be implemented here")}>
      <Download size={16} />
      <span>Resume</span>
    </Button>
  );
};

export default DownloadButton;
