"""
logging_config.py

Configures application-wide logging for the MindAnchor voice assistant.
"""

import logging
import sys


def setup_logger() -> logging.Logger:
    """
    Configure and return the application logger.

    Returns:
        logging.Logger: Configured logger instance.
    """

    logger = logging.getLogger("MindAnchor")

    # Prevent duplicate handlers
    if logger.hasHandlers():
        return logger

    logger.setLevel(logging.INFO)

    formatter = logging.Formatter(
        fmt="%(asctime)s | %(levelname)-8s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)

    logger.addHandler(console_handler)

    return logger


# Global logger instance
logger = setup_logger()