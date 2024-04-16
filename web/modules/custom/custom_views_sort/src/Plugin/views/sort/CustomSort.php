<?php

namespace Drupal\custom_views_sort\Plugin\views\sort;

use Drupal\views\Plugin\views\sort\SortPluginBase;

/**
 * Sorts by 'field_new' ASC and then randomly.
 *
 * @ingroup views_sort_handlers
 *
 * @ViewsSort("custom_sort")
 */
class CustomSort extends SortPluginBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    $this->ensureMyTable();
    $this->query->addOrderBy('node__field_new', "field_new_value", 'DESC');
    $this->query->addOrderBy(NULL, "RAND()", 'ASC');
  }

}
