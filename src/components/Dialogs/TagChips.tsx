import { Chip } from "@mui/material";
import React from "react";
import { ITag } from "../../lib/interfaces";

export default function TagChips({
  tags,
  onDelete,
}: {
  tags: ITag[];
  onDelete: Function;
}) {
  return (
    <div className="row">
      <div className="col">
        {tags.map((tag, index) => {
          let icon;

          return (
            <Chip
              key={index}
              color={tag.color}
              icon={icon}
              label={tag.name}
              onDelete={() => onDelete(tag)}
              className="me-1"
            />
          );
        })}
      </div>
    </div>
  );
}
