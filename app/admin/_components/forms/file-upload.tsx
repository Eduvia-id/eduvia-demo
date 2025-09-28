import { Button } from '@/app/_components/button';
import React, { useState, useRef, DragEvent } from 'react';
import { HiUpload, HiDocumentText, HiPhotograph, HiDocument, HiX } from 'react-icons/hi';

export type FileType = 'image' | 'document' | 'pdf' | 'excel' | 'video' | 'audio' | 'all';

interface FileTypeConfig {
  accept: string;
  maxSize: number; // in MB
  description: string;
  icon: React.ReactNode;
}

const fileTypeConfigs: Record<FileType, FileTypeConfig> = {
  image: {
    accept: 'image/*',
    maxSize: 5,
    description: 'JPG, PNG, GIF, WEBP',
    icon: <HiPhotograph className="h-5 w-5" />
  },
  document: {
    accept: '.doc,.docx,.txt,.rtf',
    maxSize: 10,
    description: 'DOC, DOCX, TXT, RTF',
    icon: <HiDocumentText className="h-5 w-5" />
  },
  pdf: {
    accept: '.pdf',
    maxSize: 10,
    description: 'PDF',
    icon: <HiDocument className="h-5 w-5" />
  },
  excel: {
    accept: '.xlsx,.xls,.csv',
    maxSize: 10,
    description: 'XLSX, XLS, CSV',
    icon: <HiDocumentText className="h-5 w-5" />
  },
  video: {
    accept: 'video/*',
    maxSize: 100,
    description: 'MP4, AVI, MOV, MKV',
    icon: <HiDocument className="h-5 w-5" />
  },
  audio: {
    accept: 'audio/*',
    maxSize: 50,
    description: 'MP3, WAV, AAC, FLAC',
    icon: <HiDocument className="h-5 w-5" />
  },
  all: {
    accept: '*/*',
    maxSize: 50,
    description: 'Semua jenis file',
    icon: <HiDocument className="h-5 w-5" />
  }
};

interface FileUploadProps {
  label?: string;
  fileType: FileType;
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
  required?: boolean;
  multiple?: boolean;
  customAccept?: string;
  customMaxSize?: number;
  customDescription?: string;
  placeholder?: string;
}

export default function FileUpload({
  label,
  fileType,
  value,
  onChange,
  error,
  required,
  multiple = false,
  customAccept,
  customMaxSize,
  customDescription,
  placeholder
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const config = fileTypeConfigs[fileType];
  const accept = customAccept || config.accept;
  const maxSize = customMaxSize || config.maxSize;
  const description = customDescription || config.description;

  const validateFile = (file: File): string | null => {
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      return `Ukuran file melebihi batas maksimal ${maxSize}MB`;
    }

    // Check file type if specific type is set (not 'all')
    if (fileType !== 'all' && !customAccept) {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const acceptedExtensions = accept.split(',').map(ext => ext.trim());

      // For mime types like image/*, video/*, audio/*
      if (accept.includes('/*')) {
        const mimeType = file.type;
        const expectedType = accept.replace('/*', '');
        if (!mimeType.startsWith(expectedType)) {
          return `Format file tidak didukung. Hanya menerima: ${description}`;
        }
      } else {
        // For specific extensions
        if (!acceptedExtensions.includes(fileExtension)) {
          return `Format file tidak didukung. Hanya menerima: ${description}`;
        }
      }
    }

    return null;
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0]; // Take first file for single upload
    const validationError = validateFile(file);

    if (validationError) {
      setUploadError(validationError);
      return;
    }

    setUploadError('');
    onChange(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
  };

  const handleRemoveFile = () => {
    onChange(null);
    setUploadError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const displayError = error || uploadError;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className={`relative rounded-lg border-2 border-dashed p-6 transition-colors ${isDragOver
          ? 'border-sapphire-normal bg-sapphire-50'
          : displayError
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 hover:border-gray-400'
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          className="hidden"
        />

        {value ? (
          // File selected state
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {config.icon}
              <div>
                <p className="text-sm font-medium text-gray-900">{value.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(value.size)}</p>
              </div>
            </div>
            <Button
              type="button"
              onClick={handleRemoveFile}
              color='secondary'
            >
              <HiX className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          // Empty state
          <div className="text-center">
            <div className="flex justify-center mb-3">
              {config.icon}
            </div>
            <button
              type="button"
              onClick={handleUploadClick}
              className="mb-3 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition-colors text-sm font-medium"
            >
              <HiUpload className="h-4 w-4" />
              Upload
            </button>
            <p className="text-sm text-gray-600 mb-1">
              atau drag & drop file di sini
            </p>
            <p className="text-sm text-gray-500">
              {placeholder || `Format: ${description} (Max: ${maxSize}MB)`}
            </p>
          </div>
        )}
      </div>

      {displayError && (
        <p className="mt-1 text-sm text-red-600">{displayError}</p>
      )}
    </div>
  );
}