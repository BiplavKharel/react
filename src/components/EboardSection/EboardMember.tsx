import React, { useState, useEffect, useRef } from 'react';
import styles from './EboardMember.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  position: string;
  major?: string;
  graduation?: string;
  linkedin?: string;
  email?: string;
};

const EboardMember: React.FC<Props> = ({
                                         image,
                                         name,
                                         position,
                                         major,
                                         graduation,
                                         linkedin,
                                         email,
                                       }) => {
  const [imageSrc, setImageSrc] = useState<string>(image);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const componentRef = useRef<HTMLDivElement>(null);
  const maxRetries = 3;

  // Reset state when image prop changes
  useEffect(() => {
    setImageSrc(image);
    setImageLoaded(false);
    setImageError(false);
    setRetryCount(0);
  }, [image]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Network status listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      // Retry loading the original image
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setImageError(false);
      }, 1000 * (retryCount + 1)); // Progressive delay
    } else {
      // Max retries reached, use fallback
      setImageError(true);
      setImageLoaded(false);
      setImageSrc('/images/zp_logo.png');
    }
  };

  // Load image only when component is in view and online
  useEffect(() => {
    if (!isInView || !isOnline) return;

    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;

    // Add timeout for slower mobile networks
    const timeoutId = setTimeout(() => {
      if (!imageLoaded) {
        handleImageError();
      }
    }, 8000); // 8 second timeout for mobile

    img.src = imageSrc;

    return () => {
      clearTimeout(timeoutId);
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc, isInView, imageLoaded, retryCount, isOnline]);

  return (
      <div ref={componentRef} className={styles.polaroid}>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imageContainer} ${imageLoaded ? styles.loaded : ''}`}>
            {isInView && !imageLoaded && !imageError && (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.spinner}></div>
                </div>
            )}
            {!isInView && (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.loadingText}>Loading...</div>
                </div>
            )}
            {isInView && !isOnline && (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.loadingText}>Offline</div>
                </div>
            )}
            {isInView && isOnline && (
                <img
                    src={imageSrc}
                    alt={name}
                    className={`${styles.photo} ${imageLoaded ? styles.visible : ''}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                />
            )}
          </div>
          <div className={styles.overlay}>
            {major && (
                <p>
                  <strong>Major:</strong><br />{major}
                </p>
            )}
            {graduation && (
                <p>
                  <strong>Class of:</strong><br />{graduation}
                </p>
            )}
          </div>
        </div>
        <div className={styles.caption}>
          <h3>{name}</h3>
          <p className={styles.position}>{position}</p>
          {(linkedin || email) && (
              <div className={styles.links}>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className={styles.icon} />
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`}>
                      <FaEnvelope className={styles.icon} />
                    </a>
                )}
              </div>
          )}
        </div>
      </div>
  );
};

export default EboardMember;