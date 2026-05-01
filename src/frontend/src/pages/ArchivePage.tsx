import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type DocumentFolder,
  getDocuments,
  getProjectById,
} from "@/data/mockData";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, FileText, Folder } from "lucide-react";
import { useState } from "react";

interface FolderDef {
  key: DocumentFolder;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

const FOLDERS: FolderDef[] = [
  {
    key: "Study",
    label: "الدراسات",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    key: "Contract",
    label: "العقود",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    key: "Execution",
    label: "التنفيذ",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500",
  },
  {
    key: "Correspondence",
    label: "المراسلات",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
  },
];

export default function ArchivePage() {
  const { id } = useParams({ from: "/projects/$id/archive" });
  const projectId = Number(id);
  const project = getProjectById(projectId);
  const allDocuments = getDocuments(projectId);

  const [selectedFolder, setSelectedFolder] = useState<DocumentFolder>("Study");

  const activeFolderDef = FOLDERS.find((f) => f.key === selectedFolder)!;
  const filteredDocs = allDocuments.filter(
    (doc) => doc.folder === selectedFolder,
  );

  function docCountFor(folder: DocumentFolder) {
    return allDocuments.filter((d) => d.folder === folder).length;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            أرشيف المشروع
            {project && (
              <span className="font-normal text-muted-foreground text-base mr-2">
                — {project.name}
              </span>
            )}
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            إدارة وثائق ومستندات المشروع
          </p>
        </div>
        <Link to="/projects/$id" params={{ id }}>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            data-ocid="archive.back_button"
          >
            <ArrowLeft size={15} />
            العودة للمشروع
          </Button>
        </Link>
      </div>

      {/* Two-column layout (RTL: folders on RIGHT = visual right, docs on LEFT = visual left) */}
      <div className="flex gap-5 items-start">
        {/* Folder list — right column (rendered first for RTL) */}
        <div
          className="w-72 flex-shrink-0 flex flex-col gap-3"
          data-ocid="archive.folders.panel"
        >
          <h3 className="text-sm font-semibold text-foreground px-1">
            المجلدات
          </h3>
          {FOLDERS.map((folder, index) => {
            const isSelected = selectedFolder === folder.key;
            const count = docCountFor(folder.key);
            return (
              <button
                key={folder.key}
                type="button"
                onClick={() => setSelectedFolder(folder.key)}
                data-ocid={`archive.folder.item.${index + 1}`}
                className={[
                  "flex items-center gap-3 px-4 py-4 rounded-xl border-2 text-right w-full transition-smooth",
                  isSelected
                    ? `${folder.bgColor} ${folder.borderColor} shadow-sm`
                    : "bg-card border-border hover:border-border hover:bg-muted/30",
                ].join(" ")}
              >
                <div
                  className={[
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    isSelected ? folder.bgColor : "bg-muted",
                  ].join(" ")}
                >
                  <Folder
                    size={20}
                    className={
                      isSelected ? folder.iconColor : "text-muted-foreground"
                    }
                    fill={isSelected ? "currentColor" : "none"}
                    fillOpacity={isSelected ? 0.2 : 0}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={[
                      "text-sm font-semibold truncate",
                      isSelected ? folder.color : "text-foreground",
                    ].join(" ")}
                  >
                    {folder.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {count} {count === 1 ? "وثيقة" : "وثائق"}
                  </p>
                </div>
                <Badge
                  variant={isSelected ? "default" : "secondary"}
                  className="flex-shrink-0 text-xs min-w-[24px] justify-center"
                  data-ocid={`archive.folder.badge.${index + 1}`}
                >
                  {count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Document list — left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          {/* Section header */}
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold text-foreground">
              وثائق{" "}
              <span className={activeFolderDef.color}>
                {activeFolderDef.label}
              </span>
            </h3>
            <span className="text-xs text-muted-foreground">
              {filteredDocs.length} نتيجة
            </span>
          </div>

          {/* Empty state */}
          {filteredDocs.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-16 bg-card rounded-xl border border-border"
              data-ocid="archive.documents.empty_state"
            >
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-3">
                <FileText size={24} className="text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">
                لا توجد وثائق في هذا المجلد
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                لم يتم رفع أي وثائق بعد
              </p>
            </div>
          )}

          {/* Document rows */}
          <div
            className="flex flex-col gap-2"
            data-ocid="archive.documents.list"
          >
            {filteredDocs.map((doc, index) => (
              <div
                key={doc.id}
                className="flex items-center gap-4 px-5 py-4 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-smooth group"
                data-ocid={`archive.document.item.${index + 1}`}
              >
                {/* PDF Icon */}
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-destructive" />
                </div>

                {/* Document info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {doc.name}
                  </p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-muted-foreground">
                      رقم الوثيقة:{" "}
                      <span className="font-mono text-foreground">
                        {doc.docNumber}
                      </span>
                    </span>
                    <span className="text-muted-foreground/40 text-xs">|</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(doc.date).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* View button */}
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`archive.document.view_button.${index + 1}`}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth flex-shrink-0"
                  >
                    عرض
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
