import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import styles from "./MegaMenu.module.scss";
import type { MegaMenuData } from "./Navbar";

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenu = ({
  data,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps): React.ReactElement | null => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<"center" | "right">("center");

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();

    if (path.includes("#")) {
      const [basePath, anchor] = path.split("#");
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      navigate(path);
    }

    onMouseLeave();
  };

  const featured = data.featured;

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const menuRight = rect.right;

      if (menuRight > viewportWidth - 20) {
        setPosition("right");
      } else {
        setPosition("center");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const menuRight = rect.right;

        if (menuRight > viewportWidth - 20) {
          setPosition("right");
        } else {
          setPosition("center");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className={`${styles.megaMenu} ${position === "right" ? styles.alignRight : styles.alignCenter}`}
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className={styles.megaMenuInner}>
            <div className={styles.megaMenuContent}>
              <div className={styles.megaMenuColumns}>
                {data.sections.map((section) => (
                  <div key={section.title} className={styles.megaMenuColumn}>
                    <h4>{section.title}</h4>
                    <ul className={styles.columnItems}>
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={styles.columnItem}
                            onClick={(e) => handleItemClick(e, item.path)}
                          >
                            <span className={styles.itemLabel}>
                              {item.label}
                            </span>
                            {item.description && (
                              <span className={styles.itemDescription}>
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {featured && (
                <div className={styles.megaMenuFeatured}>
                  <div className={styles.featuredCard}>
                    <div className={styles.featuredIcon}>
                      <Sparkles size={18} strokeWidth={2} />
                    </div>
                    <h4>{featured.title}</h4>
                    <p>{featured.description}</p>
                    <Link
                      to={featured.path}
                      className={styles.featuredLink}
                      onClick={(e) => handleItemClick(e, featured.path)}
                    >
                      Learn More
                      <ChevronRight size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
