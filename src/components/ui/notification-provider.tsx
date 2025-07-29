"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import Notification from './notification';

type NotificationType = 'success' | 'error';

interface NotificationContextType {
  showNotification: (type: NotificationType, title: string, message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationState {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
}

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = useCallback((type: NotificationType, title: string, message: string, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotification({ id, type, title, message, duration });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          isVisible={true}
          onClose={hideNotification}
          duration={notification.duration}
        />
      )}
    </NotificationContext.Provider>
  );
};