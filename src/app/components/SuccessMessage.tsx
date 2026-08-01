import React from 'react';
import { Card, CardContent } from './ui/card';

interface SuccessMessageProps {
  icon: React.ReactNode;
  title: string;
  message: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  icon,
  title,
  message
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-md">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 text-green-600 mx-auto mb-4">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">{title}</h2>
          <p className="text-gray-600">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
};