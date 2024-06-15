"use server"

import { supabase } from "@/lib/supabase"
import type { Project } from "./_types"

/**
 * Returns all the projects in my database
 */
export const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select()
      .filter("active", "eq", true)
      .returns<Project[]>()
      
    if (error) throw Error(error.message)

    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
