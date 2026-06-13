import { useState } from "react";
import { useEditor } from "./EditorProvider";
import { Settings, Eye, Sliders, CheckCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ImageEditorController() {
  const { editMode, setEditMode, manifest, handleResetAll } = useEditor();
  const [isOpen, setIsOpen] = useState(false);

  const customCount = Object.keys(manifest).length;

  return (
    <div className="fixed bottom-24 right-4 z-50 sm:bottom-28">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-2xl hover:bg-primary/95 transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <Settings className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "rotate-90" : "group-hover:rotate-45"}`} />
        {customCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-white ring-2 ring-background">
            {customCount}
          </span>
        )}
      </button>

      {/* Editor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 overflow-hidden rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-primary" />
                <h3 className="font-display text-base font-bold text-foreground">
                  Site Customizer
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {/* Toggle Switch */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Customize Mode
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Enable hover controls on images
                  </p>
                </div>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    editMode ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out ${
                      editMode ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Status information */}
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3 text-xs space-y-2">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Customized Images:</span>
                  <span className="font-bold text-primary">{customCount}</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-normal">
                  Images are saved into the local <code className="bg-muted px-1 py-0.5 rounded text-foreground">/public/uploads/</code> folder.
                </div>
              </div>

              {/* Reset All */}
              {customCount > 0 && (
                <button
                  onClick={handleResetAll}
                  className="w-full flex items-center justify-center gap-2 py-2 border border-destructive/30 hover:bg-destructive/10 text-destructive text-xs font-semibold rounded-lg transition cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Revert All to Default
                </button>
              )}

              {/* Guide Banner */}
              {editMode && (
                <div className="flex gap-2 text-[11px] text-primary bg-primary/10 border border-primary/20 rounded-lg p-2.5 leading-snug animate-pulse">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Hover over any image on the page and click <strong>"Upload Image"</strong> to change it.
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
